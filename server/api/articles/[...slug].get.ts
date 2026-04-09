import { createError } from 'h3'
import { getAdjacentArticles, getArticleBySlug } from '../../utils/content'

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug || ''
  const article = await getArticleBySlug(event, slug)

  if (!article) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    })
  }

  const adjacent = await getAdjacentArticles(event, article.path)

  return {
    article,
    ...adjacent,
  }
})
