<script setup lang="ts">
import type { ArticleMeta, SearchEntry } from '~/types/content'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const keyword = ref(typeof route.query.query === 'string' ? route.query.query : '')
const category = ref(typeof route.query.category === 'string' ? route.query.category : '')

const { data: articleIndex } = await useArticleIndex()

const data = computed<SearchEntry[]>(() => {
  const source = articleIndex.value || []
  const searchText = keyword.value.trim().toLowerCase()

  return source
    .filter((article: ArticleMeta) => {
      const categoryMatched = !category.value || article.category === category.value
      if (!categoryMatched) {
        return false
      }

      if (!searchText) {
        return true
      }

      return [
        article.title,
        article.description,
        article.category,
        ...article.tags,
      ]
        .join(' ')
        .toLowerCase()
        .includes(searchText)
    })
    .map(article => ({
      title: article.title,
      path: article.path,
      category: article.category,
      tags: article.tags,
      description: article.description,
    }))
})

watch([keyword, category], async () => {
  await navigateTo(localePath({
    path: '/search',
    query: {
      query: keyword.value || undefined,
      category: category.value || undefined,
    },
  }), { replace: true })
})

useSeoMeta({
  title: t('search.title'),
  description: t('search.description'),
})
</script>

<template>
  <div class="mx-auto max-w-4xl space-y-6">
    <div>
      <h1 class="text-3xl font-semibold text-slate-950">{{ t('search.title') }}</h1>
      <p class="mt-2 text-sm text-slate-500">{{ t('search.description') }}</p>
    </div>

    <SearchPanel v-model:model-value="keyword" v-model:category-value="category" />

    <div class="space-y-4">
      <article
        v-for="item in data"
        :key="item.path"
        class="panel p-5"
      >
        <div class="flex flex-wrap items-center gap-2">
          <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">{{ item.category }}</span>
          <span v-for="tag in item.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            #{{ tag }}
          </span>
        </div>
        <NuxtLink :to="localePath(item.path)" class="mt-4 block text-xl font-semibold text-slate-900 hover:text-teal-700">
          {{ item.title }}
        </NuxtLink>
        <p class="mt-2 text-sm leading-7 text-slate-600">{{ item.description }}</p>
      </article>

      <div v-if="!data.length" class="panel p-10 text-center text-sm text-slate-500">
        {{ t('search.empty') }}
      </div>
    </div>
  </div>
</template>
