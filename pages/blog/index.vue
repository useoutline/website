<script lang="ts" setup>
const { data } = await useAsyncData("blogs", () => queryContent().find());
const blogs = data.value?.toSorted(
  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
);
</script>

<template>
  <div>
    <div v-for="blog in blogs" :key="blog._path">
      <NuxtLink :to="`${blog._path}`">{{ blog.title }}</NuxtLink>
    </div>
  </div>
</template>

<style></style>
