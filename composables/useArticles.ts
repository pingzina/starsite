import type { ArticleMeta } from '~/types/content'

interface ArticleQuery {
  featured?: boolean
  category?: string
  limit?: number
  search?: string
}

export const useArticles = async (query: ArticleQuery = {}) => {
  return await useFetch<ArticleMeta[]>('/api/articles', {
    key: `articles:${JSON.stringify(query)}`,
    query,
  })
}
