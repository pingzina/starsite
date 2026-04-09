import type { SearchEntry } from '~/types/content'

interface SearchFilters {
  query?: string
  category?: string
}

export const useSearchArticles = async (filters: SearchFilters = {}) => {
  return await useFetch<SearchEntry[]>('/api/search', {
    key: `search:${JSON.stringify(filters)}`,
    query: filters,
  })
}
