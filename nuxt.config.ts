import { defineNuxtConfig } from 'nuxt/config'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const articleIndexPath = resolve(process.cwd(), 'public/articles-index.json')
const articleIndex = existsSync(articleIndexPath)
  ? JSON.parse(readFileSync(articleIndexPath, 'utf8')) as Array<{ path: string }>
  : []
const articleRoutes = articleIndex.flatMap(article => [article.path, `/en${article.path}`])

export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      titleTemplate: `%s · ${process.env.NUXT_PUBLIC_SITE_TITLE || 'StarSite'}`,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' },
        {
          name: 'description',
          content: 'A personal frontend engineer documentation hub with interview notes, engineering summaries, and profile sections.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      siteTitle: process.env.NUXT_PUBLIC_SITE_TITLE || 'StarSite',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      defaultLocale: process.env.NUXT_PUBLIC_DEFAULT_LOCALE || 'zh',
      searchMode: process.env.NUXT_PUBLIC_SEARCH_MODE || 'metadata',
      assetBase: process.env.NUXT_PUBLIC_ASSET_BASE || '/',
      enableAnalytics: process.env.NUXT_PUBLIC_ENABLE_ANALYTICS === 'true',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/rss.xml', '/sitemap.xml', ...articleRoutes],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          },
        },
      },
    },
  },
  routeRules: {
    '/rss.xml': { prerender: true },
    '/sitemap.xml': { prerender: true },
    '/api/**': { cors: true },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: (process.env.NUXT_PUBLIC_DEFAULT_LOCALE === 'en' ? 'en' : 'zh'),
    locales: [
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
    ],
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  tailwindcss: {
    viewer: false,
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
