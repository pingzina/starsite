<script setup lang="ts">
const { t, locale } = useI18n()

const { data: profile } = await useFetch('/api/profile', {
  query: {
    locale: locale.value,
  },
})

useSeoMeta({
  title: t('profile.title'),
  description: t('profile.description'),
})
</script>

<template>
  <div class="mx-auto max-w-5xl space-y-6">
    <div>
      <h1 class="text-4xl font-semibold text-slate-950">{{ t('profile.title') }}</h1>
      <p class="mt-3 max-w-3xl text-base leading-8 text-slate-600">{{ t('profile.description') }}</p>
    </div>

    <ProfilePanel v-if="profile" :profile="profile" />

    <section v-if="profile" class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="panel p-6">
        <h2 class="text-xl font-semibold text-slate-900">Stack</h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            class="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <div class="panel p-6">
        <h2 class="text-xl font-semibold text-slate-900">Timeline</h2>
        <div class="mt-5 space-y-4">
          <article v-for="item in profile.timeline" :key="item.year + item.title" class="rounded-2xl border border-slate-100 p-4">
            <p class="text-xs uppercase tracking-[0.24em] text-slate-400">{{ item.year }}</p>
            <h3 class="mt-2 font-medium text-slate-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-slate-600">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
