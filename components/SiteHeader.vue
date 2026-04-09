<script setup lang="ts">
import { mainNavigation } from '~/app/config/site'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { t, locale } = useI18n()

const mobileOpen = ref(false)

const navItems = computed(() => mainNavigation.map(item => ({
  label: t(item.labelKey),
  to: localePath(item.to),
})))
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/60 bg-[rgba(246,248,251,0.82)] backdrop-blur-xl">
    <div class="container-shell flex h-16 items-center justify-between gap-4">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-sm font-semibold text-white shadow-lg shadow-teal-900/20">MS</span>
        <div>
          <p class="text-sm font-semibold text-slate-900">{{ t('siteName') }}</p>
          <p class="text-xs text-slate-500">{{ t('tagline') }}</p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm text-slate-600 hover:bg-white hover:text-slate-900"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <NuxtLink
          :to="switchLocalePath(locale === 'zh' ? 'en' : 'zh')"
          class="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
        >
          {{ locale === 'zh' ? 'EN' : '中' }}
        </NuxtLink>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          class="rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm text-white"
        >
          {{ t('nav.github') }}
        </a>
      </div>

      <button
        class="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="i">≡</span>
      </button>
    </div>

    <div v-if="mobileOpen" class="container-shell pb-4 md:hidden">
      <div class="panel space-y-2 p-3">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          :to="switchLocalePath(locale === 'zh' ? 'en' : 'zh')"
          class="block rounded-2xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          @click="mobileOpen = false"
        >
          {{ locale === 'zh' ? 'Switch to English' : '切换到中文' }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
