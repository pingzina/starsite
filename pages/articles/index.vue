<script setup lang="ts">
import type { ArticleMeta } from '~/types/content'

const route = useRoute()
const { t } = useI18n()

const selectedCategory = computed(() => typeof route.query.category === 'string' ? route.query.category : '')

const { data: articles } = await useFetch<ArticleMeta[]>('/api/articles', {
  query: {
    category: selectedCategory.value || undefined,
  },
})

useSeoMeta({
  title: t('nav.docs'),
  description: t('hero.description'),
})
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[260px_1fr]">
    <SidebarCategories :active="selectedCategory" />
    <section class="space-y-5">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-semibold text-slate-950">{{ t('section.allDocs') }}</h1>
          <p class="mt-2 text-sm text-slate-500">{{ selectedCategory || t('section.latestDocs') }}</p>
        </div>
        <span class="rounded-full bg-white px-3 py-1 text-sm text-slate-500 shadow-sm">{{ articles?.length || 0 }}</span>
      </div>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <DocCard v-for="article in articles || []" :key="article.path" :article="article" />
      </div>
    </section>
  </div>
</template>
