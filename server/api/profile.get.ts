import { getQuery } from 'h3'
import { getProfile } from '../utils/content'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const locale = typeof query.locale === 'string' ? query.locale : 'zh'
  return getProfile(locale)
})
