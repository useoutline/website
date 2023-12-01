<script lang="ts" setup>
const wits = [
  "Our page got a taste for the high life and is now captain of its own paper plane fleet. Expect an airshow soon!",
  "This page folded itself into a paper plane, chasing dreams of becoming the Amelia Earhart of the digital era.",
  "This page went full Wright Brothers and attempted a digital takeoff. It's on the lookout for the Kitty Hawk of cyberspace.",
  "Perhaps this page stumbled upon the secret origami teachings of the internet and is now perfecting its aeronautical skills.",
  "This page mastered the art of aerodynamics and embarked on a paper plane marathon across the digital skyline. Mileage unknown!",
  "Our page is participating in the inaugural Digital Paper Plane Olympics. It's aiming for gold in the synchronized folding event!",
  "This page received its digital pilot's license and is exploring the clouds of cyberspace, seeking the ultimate in-flight entertainment.",
  "Our page turned into a pilgrim of paper planes, traversing digital terrains in search of the elusive land of perfectly folded corners.",
  "Seems our page got caught up in a paper plane playdate, swapping folding techniques with web pages from afar.",
  "This page is on a daring paper plane expedition, charting unknown territories of the internet skies. Coordinates pending!",
  "Our page fashioned itself into a paper plane pioneer, boldly going where no hyperlink has gone before—except into the clouds!",
  "This page hitched a ride on a digital tailwind, cruising through the vast cyberspace on its paper wings. Speedy, but lost!",
  "This page embarked on a paper flight safari, observing the elusive digital fauna from a bird's eye view.",
  "This page packed a virtual picnic basket and soared off on a paper plane escapade. Munching on pixels and digital sandwiches!",
];

const witsLen = wits.length;

const errorWit = computed(() => getRandomWit());

function getRandomWit() {
  return wits[Math.floor(Math.random() * witsLen)];
}
</script>

<template>
  <div
    class="flex-grow flex flex-column items-center justify-center relative container"
  >
    <img src="~/assets/images/404-illustration.svg" class="illustration-404" />
    <div
      class="flex flex-column items-center justify-center description-404 container"
      style="gap: 1.2rem"
    >
      <h2 class="text-center">
        404 Error: <br class="desktop-hide" />Lost in the Digital Skies
      </h2>
      <p
        v-if="errorWit"
        style="max-width: 56rem; margin-bottom: 2rem"
        class="text-center"
      >
        {{ errorWit }}
      </p>
      <NuxtLink to="/" class="color-primary link-underline-transition font-bold"
        >Let's Fly Back Home!</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.illustration-404 {
  width: 40rem;
}
.description-404 {
  position: absolute;
  bottom: -3.2rem;
}

@media screen and (max-width: 767px) {
  .illustration-404 {
    width: 100%;
    max-width: 40rem;
  }

  .description-404 {
    bottom: -6.4rem;
  }
}
</style>
