<template>
  <svg viewBox="0 0 130.2 130.2">
    <circle
      class="path circle"
      fill="none"
      stroke="#D06079"
      stroke-width="12"
      stroke-miterlimit="10"
      cx="65.1"
      cy="65.1"
      r="59"
    />
    <line
      class="path line"
      fill="none"
      stroke="#D06079"
      stroke-width="12"
      stroke-linecap="round"
      stroke-miterlimit="10"
      x1="34.4"
      y1="37.9"
      x2="95.8"
      y2="92.3"
    />
    <line
      class="path line"
      fill="none"
      stroke="#D06079"
      stroke-width="12"
      stroke-linecap="round"
      stroke-miterlimit="10"
      x1="95.8"
      y1="38"
      x2="34.4"
      y2="92.2"
    />
  </svg>
</template>

<style scoped>
.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
}

.path.circle {
  -webkit-animation: dash 0.9s ease-in-out;
  animation: dash 0.9s ease-in-out;
}

.path.line {
  stroke-dashoffset: 1000;
  -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
  animation: dash 0.9s 0.35s ease-in-out forwards;
}

.path.check {
  stroke-dashoffset: -100;
  -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
  animation: dash-check 0.9s 0.35s ease-in-out forwards;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>
