export interface TocLink {
  id: string
  text: string
  depth: number
  children?: TocLink[]
}

export interface ArticleMedia {
  type: 'image' | 'audio' | 'demo'
  src: string
  alt?: string
  title?: string
}

export interface ArticleMeta {
  path: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  cover?: string
  publishAt: string
  updatedAt: string
  readingTime: string
  featured: boolean
  draft: boolean
  media: ArticleMedia[]
  body?: {
    toc?: {
      links?: TocLink[]
    }
  }
}

export interface ArticleCategory {
  key: string
  label: string
  description: string
  accent: string
}

export interface ProfileInfo {
  name: string
  role: string
  location: string
  summary: string
  experience: string
  skills: string[]
  links: Array<{
    label: string
    href: string
  }>
  timeline: Array<{
    year: string
    title: string
    description: string
  }>
}

export interface SiteNavItem {
  labelKey: string
  to: string
}

export interface SearchEntry {
  title: string
  path: string
  category: string
  tags: string[]
  description: string
}

export interface SiteFeatureFlags {
  analytics: boolean
  searchMode: string
  assetBase: string
}
