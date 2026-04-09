<script setup lang="ts">
defineProps<{
  links?: Array<{
    id: string
    text: string
    depth: number
  }>
}>()

const { t } = useI18n()
</script>

<template>
  <aside class="panel h-fit p-4">
    <p class="mb-4 text-sm font-semibold text-slate-900">{{ t('section.toc') }}</p>
    <div v-if="links?.length" class="space-y-2">
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        class="block text-sm text-slate-600 hover:text-teal-700"
        :class="link.depth > 2 ? 'pl-4' : ''"
      >
        {{ link.text }}
      </a>
    </div>
    <p v-else class="text-sm text-slate-500">{{ t('docs.noToc') }}</p>
  </aside>
</template>
