<script lang="ts" setup>
useHead({
  title: `Blog @ ${AppConstants.SiteTitle}`,
});

const { data } = await useAsyncData("blogs", () => queryContent("blog").find());
const blogs = data.value?.length
  ? [...data.value].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  : [];

const showEarlyAccessSignup = ref(false);
</script>

<template>
  <main v-if="blogs?.length">
    <div v-for="blog in blogs" :key="blog._path">
      <NuxtLink :to="`${blog._path}`">{{ blog.title }}</NuxtLink>
    </div>
  </main>
  <main class="min-height-full flex flex-column" v-else>
    <AppHeader style="width: 100%" />
    <div
      class="flex-grow flex flex-column items-center justify-center container"
      style="gap: 2rem"
    >
      <img
        src="~/assets/images/coming-soon-illustration.svg"
        loading="lazy"
        class="illustration-coming-soon"
      />
      <h2>Blogs coming soon. Subscribe to stay updated.</h2>
      <div class="flex items-center justify-center" style="gap: 2rem">
        <button
          class="button-primary font-bold"
          @click.stop="showEarlyAccessSignup = true"
        >
          Subscribe
        </button>
        <EarlyAccessSignup
          v-if="showEarlyAccessSignup"
          @close="showEarlyAccessSignup = false"
        />
        <NuxtLink
          to="/"
          class="color-primary link-underline-transition font-bold"
          >Back to Home!</NuxtLink
        >
      </div>
    </div>
  </main>
</template>

<style>
.illustration-coming-soon {
  width: 100%;
  max-height: 32rem;
}
</style>
