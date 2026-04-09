import { getQuery } from 'h3'
import { getArticles } from '../utils/content'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return await getArticles(event, {
    featured: query.featured === 'true',
    category: typeof query.category === 'string' ? query.category : undefined,
    search: typeof query.search === 'string' ? query.search : undefined,
    limit: typeof query.limit === 'string' ? Number(query.limit) : undefined,
  })
})
