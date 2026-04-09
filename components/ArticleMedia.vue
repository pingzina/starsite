<script setup lang="ts">
import type { ArticleMedia } from '~/types/content'

defineProps<{
  media: ArticleMedia[]
}>()
</script>

<template>
  <section v-if="media.length" class="mt-10 space-y-5">
    <div
      v-for="item in media"
      :key="`${item.type}-${item.src}`"
      class="panel overflow-hidden p-4"
    >
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        :alt="item.alt || item.title || 'media image'"
        class="w-full rounded-2xl object-cover"
      >
      <audio
        v-else-if="item.type === 'audio'"
        controls
        class="w-full"
        :src="item.src"
      />
      <a
        v-else
        :href="item.src"
        target="_blank"
        rel="noreferrer"
        class="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        {{ item.title || item.src }}
      </a>
      <p v-if="item.title" class="mt-3 text-sm text-slate-500">{{ item.title }}</p>
    </div>
  </section>
</template>
