import { getArticles } from '../utils/content'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const articles = await getArticles(event, { limit: 20 })

  const items = articles.map((article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${config.public.siteUrl}${article.path}</link>
      <guid>${config.public.siteUrl}${article.path}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.publishAt).toUTCString()}</pubDate>
    </item>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${config.public.siteTitle}</title>
      <link>${config.public.siteUrl}</link>
      <description>Frontend engineering articles and profile notes.</description>
      ${items}
    </channel>
  </rss>`

  event.node.res.setHeader('content-type', 'application/xml; charset=utf-8')
  return xml
})
