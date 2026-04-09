<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
  }
}>()

const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <div class="container-shell flex min-h-[70vh] items-center justify-center">
    <section class="panel max-w-xl p-10 text-center">
      <p class="text-sm uppercase tracking-[0.3em] text-slate-400">{{ error.statusCode || 404 }}</p>
      <h1 class="mt-4 text-4xl font-semibold text-slate-950">{{ t('notFound.title') }}</h1>
      <p class="mt-4 text-base leading-8 text-slate-600">{{ error.statusMessage || t('notFound.description') }}</p>
      <NuxtLink :to="localePath('/')" class="mt-8 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white">
        {{ t('notFound.action') }}
      </NuxtLink>
    </section>
  </div>
</template>
