import type { ArticleMeta } from '~/types/content'

export const useArticleIndex = async () => {
  return await useFetch<ArticleMeta[]>('/articles-index.json', {
    key: 'articles-index',
    default: () => [],
  })
}
