<script lang="ts" setup>
const showEarlyAccessSignup = ref(false);

async function handleClick() {
  showEarlyAccessSignup.value = true;
  if (process.client) {
    const analytics = useAnalytics();
    analytics.value?.sendEvent("early access signup click");
  }
}
</script>

<template>
  <div>
    <button
      ref="signupCta"
      class="font-bold button-primary"
      @click.stop="handleClick"
    >
      Get Early Access
    </button>
    <Transition name="page" mode="out-in">
      <EarlyAccessSignup
        v-if="showEarlyAccessSignup"
        @close="showEarlyAccessSignup = false"
      />
    </Transition>
  </div>
</template>
