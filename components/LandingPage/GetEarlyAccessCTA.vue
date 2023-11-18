<script lang="ts" setup></script>

<template>
  <button class="font-bold rounded-10 get-early-access-cta">
    Get Early Access
  </button>
</template>

<style scoped>
.get-early-access-cta {
  background-color: var(--color-primary);
  color: var(--color-primary-light-400);
  padding: 1rem 1.4rem;
  border: 2px solid var(--color-primary);
  text-transform: capitalize;
  transition: background-color var(--duration-300) var(--easing-100),
    color var(--duration-300) var(--easing-100);
}

.get-early-access-cta:where(:hover, :focus-visible) {
  background-color: var(--color-primary-light-400);
  color: var(--color-primary);
}
</style>
