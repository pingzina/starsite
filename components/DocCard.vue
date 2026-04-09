<script setup lang="ts">
import type { ArticleMeta } from '~/types/content'

defineProps<{
  article: ArticleMeta
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <NuxtLink
    :to="localePath(article.path)"
    class="group panel flex h-full flex-col gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">{{ article.category }}</span>
      <span v-if="article.featured" class="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
        {{ t('label.featured') }}
      </span>
    </div>
    <div class="space-y-2">
      <h3 class="text-lg font-semibold text-slate-900 group-hover:text-teal-700">{{ article.title }}</h3>
      <p class="text-sm leading-6 text-slate-600">{{ article.description }}</p>
    </div>
    <div class="mt-auto flex flex-wrap gap-2">
      <span v-for="tag in article.tags.slice(0, 3)" :key="tag" class="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
        #{{ tag }}
      </span>
    </div>
    <div class="flex items-center justify-between text-xs text-slate-500">
      <span>{{ t('label.updated') }} {{ article.updatedAt }}</span>
      <span>{{ article.readingTime }}</span>
    </div>
  </NuxtLink>
</template>
