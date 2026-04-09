<script setup lang="ts">
import { categories } from '~/app/config/site'

defineProps<{
  active?: string
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <aside class="panel h-fit p-4">
    <div class="mb-4">
      <p class="text-sm font-semibold text-slate-900">{{ t('section.categories') }}</p>
    </div>
    <div class="space-y-2">
      <NuxtLink
        :to="localePath('/articles')"
        class="block rounded-2xl px-3 py-2 text-sm transition hover:bg-slate-50"
        :class="!active ? 'bg-slate-100 text-slate-900' : 'text-slate-600'"
      >
        {{ t('section.allDocs') }}
      </NuxtLink>
      <NuxtLink
        v-for="category in categories"
        :key="category.key"
        :to="localePath({ path: '/articles', query: { category: category.key } })"
        class="block rounded-2xl px-3 py-2 text-sm transition hover:bg-slate-50"
        :class="active === category.key ? 'bg-slate-100 text-slate-900' : 'text-slate-600'"
      >
        {{ category.key }}
      </NuxtLink>
    </div>
  </aside>
</template>
