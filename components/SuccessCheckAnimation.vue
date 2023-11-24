<template>
  <div>
    <svg viewBox="0 0 400 400">
      <circle
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        cx="200"
        cy="200"
        r="178"
        class="circle"
        transform="rotate(-90 200 200)"
      />
      <polyline
        fill="none"
        stroke="currentColor"
        stroke-width="32"
        points="88,214 173,284 304,138"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="tick"
      />
    </svg>
  </div>
</template>

<style scoped>
.circle {
  stroke-dasharray: 1194;
  stroke-dashoffset: 1194;
}

svg .circle {
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

.tick {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
}
svg .tick {
  animation: tick 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.95s;
}

@keyframes circle {
  from {
    stroke-dashoffset: 1194;
  }
  to {
    stroke-dashoffset: 2388;
  }
}

@keyframes tick {
  from {
    stroke-dashoffset: 350;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
