<script lang="ts" setup>
const showEarlyAccessSignup = ref(false);
</script>

<template>
  <div>
    <button
      class="font-bold button-primary"
      @click.stop="showEarlyAccessSignup = true"
    >
      Get Early Access
    </button>
    <EarlyAccessSignup
      v-if="showEarlyAccessSignup"
      @close="showEarlyAccessSignup = false"
    />
  </div>
</template>
