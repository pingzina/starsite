<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.18),transparent_42%)]" />
    <SiteHeader />
    <main class="container-shell pb-16 pt-8 sm:pt-10">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
