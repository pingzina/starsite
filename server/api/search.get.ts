import { getQuery } from 'h3'
import { searchArticles } from '../utils/content'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const keyword = typeof query.query === 'string' ? query.query : ''
  const category = typeof query.category === 'string' ? query.category : ''

  return await searchArticles(event, keyword, category)
})
