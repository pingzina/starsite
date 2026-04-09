import type { SiteFeatureFlags } from '~/types/content'

export const useSiteRuntime = () => {
  const config = useRuntimeConfig()

  const featureFlags: SiteFeatureFlags = {
    analytics: config.public.enableAnalytics,
    searchMode: config.public.searchMode,
    assetBase: config.public.assetBase,
  }

  return {
    apiBase: config.public.apiBase,
    siteTitle: config.public.siteTitle,
    siteUrl: config.public.siteUrl,
    featureFlags,
  }
}
