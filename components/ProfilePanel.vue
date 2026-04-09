<script setup lang="ts">
import type { ProfileInfo } from '~/types/content'

defineProps<{
  profile: ProfileInfo
}>()
</script>

<template>
  <section class="panel p-6">
    <div class="flex items-start gap-4">
      <div class="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-xl font-semibold text-white">M</div>
      <div>
        <h2 class="text-xl font-semibold text-slate-900">{{ profile.name }}</h2>
        <p class="text-sm text-teal-700">{{ profile.role }}</p>
        <p class="text-sm text-slate-500">{{ profile.location }}</p>
      </div>
    </div>
    <p class="mt-5 text-sm leading-7 text-slate-600">{{ profile.summary }}</p>
    <p class="mt-3 text-sm leading-7 text-slate-600">{{ profile.experience }}</p>
    <div class="mt-5 flex flex-wrap gap-2">
      <span v-for="skill in profile.skills" :key="skill" class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
        {{ skill }}
      </span>
    </div>
    <div class="mt-5 flex flex-wrap gap-3 text-sm">
      <a
        v-for="link in profile.links"
        :key="link.href"
        :href="link.href"
        target="_blank"
        rel="noreferrer"
        class="rounded-full border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50"
      >
        {{ link.label }}
      </a>
    </div>
  </section>
</template>
