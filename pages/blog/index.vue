<script lang="ts" setup>
useHead({
  title:
    "Blog @ Outline Analytics - Uncover Insights with Privacy-Focused Analytics",
});

const { data } = await useAsyncData("blogs", () => queryContent().find());
const blogs = data.value?.toSorted(
  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
);
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
      class="flex-grow flex flex-column items-center justify-center"
      style="gap: 2rem"
    >
      <h2>Blogs coming soon. Subscribe to stay updated.</h2>
    </div>
  </main>
</template>

<style></style>
