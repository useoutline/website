<script lang="ts" setup>
const overlayRef = ref<HTMLDivElement | null>(null);
const emit = defineEmits(["close"]);

function closeOverlay(ev: any) {
  if (ev.target?.classList.contains("overlay-container")) {
    emit("close");
  }
}

onMounted(() => {
  overlayRef.value?.addEventListener("click", closeOverlay);
  overlayRef.value?.focus();
});
</script>

<template>
  <div class="overlay-container" ref="overlayRef">
    <div class="overlay-content-card relative" role="dialog" tabindex="0">
      <button @click.stop="emit('close')" class="button-close">
        <img src="~/assets/images/icons/close-light-200.svg" title="Close" />
      </button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.button-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.button-close img {
  height: 2rem;
  width: 2rem;
}
</style>
