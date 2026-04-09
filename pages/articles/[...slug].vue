<script setup lang="ts">
import type { ArticleMeta } from '~/types/content'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug as string)
const contentPath = computed(() => `/articles/${slug.value}`)

const [{ data: article }, { data: articleIndex }] = await Promise.all([
  useAsyncData(route.path, () => queryCollection('articles').path(contentPath.value).first()),
  useArticleIndex(),
])

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const adjacent = computed(() => {
  const items = articleIndex.value || []
  const currentIndex = items.findIndex(item => item.path === contentPath.value)

  return {
    previous: currentIndex >= 0 ? items[currentIndex + 1] || null : null,
    next: currentIndex >= 0 ? items[currentIndex - 1] || null : null,
  }
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.title,
  ogDescription: article.value.description,
  ogImage: article.value.cover || '/og-cover.svg',
})
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)_220px]">
    <SidebarCategories :active="article?.category" />

    <article v-if="article" class="panel p-6 sm:p-8">
      <NuxtLink :to="localePath('/articles')" class="mb-6 inline-flex text-sm text-teal-700">
        ← {{ t('docs.back') }}
      </NuxtLink>
      <header class="border-b border-slate-100 pb-6">
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">{{ article.category }}</span>
          <span v-for="tag in article.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            #{{ tag }}
          </span>
        </div>
        <h1 class="mt-4 text-4xl font-semibold text-slate-950">{{ article.title }}</h1>
        <p class="mt-4 text-base leading-8 text-slate-600">{{ article.description }}</p>
        <div class="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
          <span>{{ t('label.updated') }} {{ article.updatedAt }}</span>
          <span>{{ article.readingTime }}</span>
        </div>
      </header>

      <div class="prose-doc mt-8">
        <ContentRenderer :value="article" />
      </div>

      <ArticleMedia :media="article.media" />

      <footer class="mt-10 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
        <NuxtLink
          v-if="adjacent.previous"
          :to="localePath(adjacent.previous.path)"
          class="rounded-3xl border border-slate-200 p-4 hover:bg-slate-50"
        >
          <p class="text-xs text-slate-400">{{ t('docs.previous') }}</p>
          <p class="mt-2 font-medium text-slate-900">{{ adjacent.previous.title }}</p>
        </NuxtLink>
        <div v-else />
        <NuxtLink
          v-if="adjacent.next"
          :to="localePath(adjacent.next.path)"
          class="rounded-3xl border border-slate-200 p-4 text-right hover:bg-slate-50"
        >
          <p class="text-xs text-slate-400">{{ t('docs.next') }}</p>
          <p class="mt-2 font-medium text-slate-900">{{ adjacent.next.title }}</p>
        </NuxtLink>
      </footer>
    </article>

    <DocToc :links="article?.body?.toc?.links" />
  </div>
</template>
