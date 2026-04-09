<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-slate-200/80 py-10">
    <div class="container-shell flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="font-medium text-slate-700">StarSite</p>
        <p>{{ t('footer.note') }}</p>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/rss.xml" class="hover:text-slate-900">RSS</NuxtLink>
        <NuxtLink to="/sitemap.xml" class="hover:text-slate-900">Sitemap</NuxtLink>
      </div>
    </div>
  </footer>
</template>
