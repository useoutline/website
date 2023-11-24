<template>
  <div class="app-loader"></div>
</template>

<style>
.app-loader {
  width: 8rem;
  height: 8rem;
  border: 0.8rem solid var(--color-primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
