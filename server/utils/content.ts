import { profileByLocale } from '~/app/config/site'
import type { ArticleMeta, ProfileInfo, SearchEntry } from '~/types/content'

const normalizeArticle = (article: Record<string, any>): ArticleMeta => ({
  path: article.path,
  slug: article.path.replace(/^\/articles\//, ''),
  title: article.title,
  description: article.description,
  category: article.category,
  tags: article.tags || [],
  cover: article.cover,
  publishAt: article.publishAt,
  updatedAt: article.updatedAt,
  readingTime: article.readingTime,
  featured: article.featured || false,
  draft: article.draft || false,
  media: article.media || [],
  body: article.body,
})

export const getArticles = async (event: any, params?: {
  featured?: boolean
  category?: string
  search?: string
  limit?: number
}) => {
  const collection = queryCollection(event, 'articles')
  const rawArticles = await collection
    .where('draft', '=', false)
    .order('updatedAt', 'DESC')
    .all()

  let articles = rawArticles.map(normalizeArticle)

  if (params?.featured) {
    articles = articles.filter((article: ArticleMeta) => article.featured)
  }

  if (params?.category) {
    articles = articles.filter((article: ArticleMeta) => article.category === params.category)
  }

  if (params?.search) {
    const keyword = params.search.toLowerCase()
    articles = articles.filter((article: ArticleMeta) =>
      [article.title, article.category, article.description, ...article.tags]
        .join(' ')
        .toLowerCase()
        .includes(keyword),
    )
  }

  if (params?.limit) {
    articles = articles.slice(0, params.limit)
  }

  return articles
}

export const getArticleBySlug = async (event: any, slug: string) => {
  const normalized = slug.startsWith('/articles/') ? slug : `/articles/${slug}`
  const article = await queryCollection(event, 'articles')
    .path(normalized)
    .first()

  return article ? normalizeArticle(article) : null
}

export const getFeaturedArticles = async (event: any) => {
  return await getArticles(event, { featured: true, limit: 6 })
}

export const searchArticles = async (event: any, query = '', category = ''): Promise<SearchEntry[]> => {
  const articles = await getArticles(event, {
    search: query || undefined,
    category: category || undefined,
  })

  return articles.map(article => ({
    title: article.title,
    path: article.path,
    category: article.category,
    tags: article.tags,
    description: article.description,
  }))
}

export const getAdjacentArticles = async (event: any, currentPath: string) => {
  const articles = await getArticles(event)
  const index = articles.findIndex((article: ArticleMeta) => article.path === currentPath)

  return {
    previous: index >= 0 ? articles[index + 1] || null : null,
    next: index >= 0 ? articles[index - 1] || null : null,
  }
}

export const getProfile = (locale: string): ProfileInfo => {
  return profileByLocale[locale] || profileByLocale.zh
}
