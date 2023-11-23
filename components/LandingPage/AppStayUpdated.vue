<template>
  <section
    class="flex flex-column items-center justify-center container"
    style="gap: 4rem"
  >
    <div class="flex flex-column items-center justify-center" style="gap: 2rem">
      <h2 class="fs-32 text-center text-balance">
        <span class="color-primary">Launching Soon!</span
        ><br class="desktop-hide" />
        Stay in the loop
      </h2>
      <p style="max-width: 72rem" class="text-center">
        Be the first to know when we launch! Sign up to get exclusive early
        access to Outline Analytics. You'll be at the forefront of a data
        revolution. Have questions or want to learn more?
        <br class="mobile-hide" />Reach out to us at
        <NuxtLink
          :to="`mailto:${AppLinks.mainEmail}`"
          rel="noopener noreferrer nofollow"
          class="color-primary font-bold link-underline-transition"
          >{{ AppLinks.mainEmail }}</NuxtLink
        >
      </p>
      <GetEarlyAccessCTA />
    </div>
    <div class="flex flex-column items-center" style="gap: 2rem">
      <p style="max-width: 60rem" class="text-center text-balance">
        Join us on our social media channels to stay updated on our progress and
        gain insights into the world of analytics.
      </p>
      <div class="flex justify-center" style="gap: 2rem">
        <NuxtLink
          v-for="social in AppSocials"
          :key="social.link"
          :to="social.link"
          :title="social.title"
          target="_blank"
          rel="noopener"
          style="line-height: 1"
          class="icon-hover-transition"
        >
          <img :alt="social.name" :src="social.icon" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style></style>
