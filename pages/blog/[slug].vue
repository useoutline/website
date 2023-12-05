<script lang="ts" setup>
const blog = await useAsyncData("blog", () => queryContent("blog").find());

console.log(blog);
</script>

<template>
  <div class="flex-grow container prose-container">
    <ContentDoc />
  </div>
</template>

<style></style>
