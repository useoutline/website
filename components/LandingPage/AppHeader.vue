<template>
  <header class="flex items-center justify-between container">
    <NuxtLink
      to="/"
      class="flex items-center"
      title="Outline Analytics (https://useoutline.xyz)"
    >
      <img
        src="~/assets/images/useoutline-logo-padded.svg"
        alt="Outline Analytics Logo"
        class="header-logo"
      />
      <span class="fs-32 mobile-hide"
        ><span class="font-bold">Outline</span> Analytics</span
      >
    </NuxtLink>
    <div class="flex items-center menu-items">
      <!-- <NuxtLink to="#features" class="font-medium link-underline-transition"
        >Features</NuxtLink
      >
      <NuxtLink to="#pricing" class="font-medium link-underline-transition"
        >Pricing</NuxtLink
      >
      <NuxtLink
        :to="{ name: 'blog' }"
        class="font-medium link-underline-transition"
        >Blog</NuxtLink
      > -->
      <GetEarlyAccessCTA />
    </div>
  </header>
</template>

<style scoped>
.header-logo {
  width: 6.4rem;
  aspect-ratio: 1 / 1;
}

.menu-items {
  gap: 2rem;
}
</style>
