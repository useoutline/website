<script lang="ts" setup>
import PrivacyFirstNoCookiesIllustration from "~/assets/images/privacy-first-no-cookies.svg";
import OpenSourceYourControlIllustration from "~/assets/images/open-source.svg";
import SimplifiedTrackingPowerfulInsightsIllustration from "~/assets/images/simplified-tracking-powerful-insights.svg";

const features = [
  {
    heading: "/{Privacy First:}/  No Intrusive Cookies",
    description:
      "Our cookie-free approach ensures your users' data remains private. No invasive tracking, just insightful analytics that respect user privacy.",
    image: PrivacyFirstNoCookiesIllustration,
  },
  {
    heading: "/{Open Source}/, Your Control",
    description:
      "With our open-source platform, you're in control. Customize data collection and analysis to suit your needs, all while maintaining transparency.",
    image: OpenSourceYourControlIllustration,
  },
  {
    heading: "Simplified Tracking, /{Powerful Insights}/",
    description:
      "Integrate our easy-to-use SDK effortlessly.  No complex setups. No coding hassle. Start gathering meaningful insights within minutes.",
    image: SimplifiedTrackingPowerfulInsightsIllustration,
  },
];

function generateFeatureTitle(title: string) {
  const titleParts = title.split("/");
  return titleParts.map((part) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return {
        text: part.replace("{", "").replace("}", ""),
        isBlue: true,
      };
    } else {
      return {
        text: part,
        isBlue: false,
      };
    }
  });
}
</script>

<template>
  <section
    class="flex flex-column items-center justify-center container features-section"
  >
    <h2 class="fs-32 text-center text-balance">
      Why Choose <br class="desktop-hide" /><span class="color-primary"
        >Outline Analytics</span
      >?
    </h2>
    <div class="flex flex-column feature-container">
      <div
        v-for="feature in features"
        :key="feature.heading"
        class="flex justify-between items-center flex-grow feature-block"
      >
        <div class="flex flex-column" style="gap: 0.8rem">
          <h3 class="fs-20 feature-title text-balance">
            <span
              v-for="titlePart in generateFeatureTitle(feature.heading)"
              :key="titlePart.text"
              :class="{ 'color-primary': titlePart.isBlue }"
              >{{ titlePart.text }}</span
            >
          </h3>
          <p class="feature-description text-balance">
            {{ feature.description }}
          </p>
        </div>
        <img
          :src="feature.image"
          :alt="feature.heading"
          class="feature-image"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  max-width: 72rem;
  gap: 2rem;
  min-height: 100%;
  max-height: max-content;
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

@media screen and (max-width: 767px) {
  .feature-image {
    width: 10rem;
  }

  .feature-block {
    gap: 1.6rem;
    flex-direction: column-reverse;
  }

  .feature-container {
    gap: 3.2rem;
  }

  .features-section {
    gap: 3.2rem;
  }

  .feature-description,
  .feature-title {
    text-align: center;
  }
}
</style>
