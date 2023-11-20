<script lang="ts" setup>
import PrivacyFirstNoCookiesIllustration from "~/assets/images/privacy-first-no-cookies.svg";
import OpenSourceYourControlIllustration from "~/assets/images/open-source.svg";
import SimplifiedTrackingPowerfulInsightsIllustration from "~/assets/images/simplified-tracking-powerful-insights.svg";

const features = [
  {
    heading: "Privacy First:  No Intrusive Cookies",
    description:
      "Our cookie-free approach ensures your users' data remains private. No invasive tracking, just insightful analytics that respect user privacy.",
    image: PrivacyFirstNoCookiesIllustration,
  },
  {
    heading: "Open Source, Your Control",
    description:
      "With our open-source platform, you're in control. Customize data collection and analysis to suit your needs, all while maintaining transparency.",
    image: OpenSourceYourControlIllustration,
  },
  {
    heading: "Simplified Tracking,  Powerful Insights",
    description:
      "Integrate our easy-to-use SDK effortlessly.  No complex setups. No coding hassle. Start gathering meaningful insights within minutes.",
    image: SimplifiedTrackingPowerfulInsightsIllustration,
  },
];

let initialDelay = 0;

function generateNextDelay() {
  initialDelay += MotionProps.popBlur.delay * 2;
  return initialDelay;
}
</script>

<template>
  <section
    class="min-height-full flex flex-column items-center justify-center container features"
    style="gap: 3.2rem"
  >
    <h2
      class="fs-32"
      v-motion
      :initial="MotionProps.popBlur.initial"
      :visibleOnce="MotionProps.popBlur.enter"
      :delay="generateNextDelay()"
    >
      Why Choose Outline Analytics?
    </h2>
    <div class="flex flex-column feature-container">
      <div
        v-for="feature in features"
        :key="feature.heading"
        class="flex justify-between items-center flex-grow feature-block"
      >
        <div class="flex flex-column" style="gap: 0.8rem">
          <h3
            v-motion
            :initial="MotionProps.popBlur.initial"
            :visibleOnce="MotionProps.popBlur.enter"
            :delay="generateNextDelay()"
          >
            {{ feature.heading }}
          </h3>
          <p
            class="feature-description"
            v-motion
            :initial="MotionProps.popBlur.initial"
            :visibleOnce="MotionProps.popBlur.enter"
            :delay="generateNextDelay()"
          >
            {{ feature.description }}
          </p>
        </div>
        <img
          :src="feature.image"
          class="feature-image"
          v-motion
          :initial="MotionProps.popBlur.initial"
          :visibleOnce="MotionProps.popBlur.enter"
          :delay="generateNextDelay()"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  max-width: 72rem;
}

.feature-description {
  max-width: 40rem;
}

.feature-block {
  gap: 3.2rem;
}

.feature-container {
  gap: 1rem;
}

@media screen and (max-width: 768px) {
  .feature-image {
    width: 10rem;
  }

  .feature-block {
    gap: 1.6rem;
  }

  .feature-container {
    gap: 3.2rem;
  }
}
</style>
