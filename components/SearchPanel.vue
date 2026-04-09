<script setup lang="ts">
import { categories } from '~/app/config/site'

const modelValue = defineModel<string>('modelValue', { default: '' })
const categoryValue = defineModel<string>('categoryValue', { default: '' })
const { t } = useI18n()
</script>

<template>
  <div class="panel surface-grid p-5 sm:p-6">
    <div class="grid gap-4 lg:grid-cols-[1fr_220px]">
      <label class="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <span class="mr-3 text-slate-400">⌕</span>
        <input
          v-model="modelValue"
          type="text"
          :placeholder="t('search.placeholder')"
          class="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        >
      </label>
      <select
        v-model="categoryValue"
        class="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
      >
        <option value="">{{ t('section.categories') }}</option>
        <option v-for="category in categories" :key="category.key" :value="category.key">
          {{ category.key }}
        </option>
      </select>
    </div>
  </div>
</template>
