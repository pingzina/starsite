import { mainNavigation } from '~/app/config/site'
import { getArticles } from '../utils/content'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const articles = await getArticles(event)
  const staticUrls = ['', '/articles', '/search', '/profile', ...mainNavigation.map(item => item.to)]

  const urls = [...new Set([
    ...staticUrls,
    ...articles.map((article) => article.path),
  ])]

  const body = urls.map((path) => `
    <url>
      <loc>${config.public.siteUrl}${path}</loc>
    </url>`).join('')

  event.node.res.setHeader('content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${body}
  </urlset>`
})
