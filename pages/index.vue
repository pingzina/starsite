<script setup lang="ts">
import { categories } from '~/app/config/site'
import type { ArticleMeta } from '~/types/content'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const keyword = ref(typeof route.query.query === 'string' ? route.query.query : '')
const category = ref('')

const [{ data: featured }, { data: recent }, { data: profile }] = await Promise.all([
  useFetch<ArticleMeta[]>('/api/articles', { query: { featured: true, limit: 6 } }),
  useFetch<ArticleMeta[]>('/api/articles', { query: { limit: 8 } }),
  useFetch('/api/profile', { query: { locale: locale.value } }),
])

useSeoMeta({
  title: t('siteName'),
  description: t('hero.description'),
  ogTitle: t('siteName'),
  ogDescription: t('hero.description'),
  ogImage: '/og-cover.svg',
})

watch([keyword, category], () => {
  navigateTo(localePath({
    path: '/search',
    query: {
      query: keyword.value || undefined,
      category: category.value || undefined,
    },
  }))
}, { once: false })
</script>

<template>
  <div class="space-y-8">
    <section class="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <div class="panel surface-grid overflow-hidden p-8 sm:p-10">
        <span class="inline-flex rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
          {{ t('hero.badge') }}
        </span>
        <h1 class="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {{ t('hero.description') }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/articles')" class="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white">
            {{ t('hero.primary') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/profile')" class="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700">
            {{ t('hero.secondary') }}
          </NuxtLink>
        </div>
        <div class="mt-10">
          <SearchPanel v-model:model-value="keyword" v-model:category-value="category" />
        </div>
      </div>

      <ProfilePanel v-if="profile" :profile="profile" />
    </section>

    <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="item in categories"
        :key="item.key"
        class="panel bg-gradient-to-br p-5"
        :class="item.accent"
      >
        <div class="rounded-2xl bg-white/80 p-5">
          <p class="text-sm font-semibold text-slate-900">{{ item.key }}</p>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
          <NuxtLink
            :to="localePath({ path: '/articles', query: { category: item.key } })"
            class="mt-5 inline-flex text-sm font-medium text-teal-700"
          >
            {{ t('hero.primary') }} →
          </NuxtLink>
        </div>
      </article>
    </section>

    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-5">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold text-slate-900">{{ t('section.featured') }}</h2>
          <NuxtLink :to="localePath('/articles')" class="text-sm font-medium text-teal-700">
            {{ t('section.allDocs') }}
          </NuxtLink>
        </div>
        <div class="grid gap-4 md:grid-cols-2">
          <DocCard v-for="article in featured || []" :key="article.path" :article="article" />
        </div>
      </div>

      <section class="panel p-6">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold text-slate-900">{{ t('section.recent') }}</h2>
          <span class="text-sm text-slate-400">{{ recent?.length || 0 }}</span>
        </div>
        <div class="mt-5 space-y-4">
          <NuxtLink
            v-for="article in recent || []"
            :key="article.path"
            :to="localePath(article.path)"
            class="block rounded-2xl border border-slate-100 px-4 py-4 hover:bg-slate-50"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <p class="font-medium text-slate-900">{{ article.title }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ article.description }}</p>
              </div>
              <span class="shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                {{ article.category }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>
    </section>
  </div>
</template>
