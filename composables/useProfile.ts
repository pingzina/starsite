import type { ProfileInfo } from '~/types/content'

export const useProfile = async () => {
  const { locale } = useI18n()
  return await useFetch<ProfileInfo>('/api/profile', {
    key: `profile:${locale.value}`,
    query: {
      locale: locale.value,
    },
  })
}
