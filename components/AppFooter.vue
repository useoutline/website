<script lang="ts" setup></script>

<template>
  <footer class="app-footer color-light-400">
    <div class="container flex footer-container">
      <div class="flex flex-column">
        <div class="flex items-center">
          <NuxtLink
            to="/"
            class="color-light-400"
            title="Outline Analytics (https://useoutline.xyz)"
          >
            <img
              src="~/assets/images/useoutline-logo-padded-white.svg"
              alt="Outline Analytics"
              class="footer-logo"
            />
          </NuxtLink>
          <div class="flex flex-column">
            <span class="fs-32"
              ><span class="font-bold">Outline</span> Analytics</span
            >
            <span class="fs-12">
              Made with in India
              <img
                alt="🇮🇳"
                src="~/assets/images/emojis/India-flag.png"
                class="footer-emoji"
              />
              with
              <img
                title="Love ❤️"
                alt="Love ❤️"
                src="~/assets/images/emojis/heart-emoji.png"
                class="footer-emoji"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="flex links-container">
        <div class="flex flex-column footer-links">
          <h3 class="fs-13 font-normal">General</h3>
          <NuxtLink
            to="https://github.com/useoutline/analytics-sdk/blob/main/README.md"
            target="_blank"
            rel="noopener"
            class="font-medium link-underline-transition color-light-400"
            >Docs</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="font-medium link-underline-transition color-light-400"
            >Blog</NuxtLink
          >
          <!-- <span
            to=""
            class="font-medium color-light-400"
            title="Coming Soon"
            style="opacity: 0.75"
            >Career</span
          > -->
        </div>
        <!-- <div class="flex flex-column footer-links">
          <h3 class="fs-18 font-normal">Legal</h3>
          <NuxtLink
            to="/terms"
            class="font-medium link-underline-transition color-light-400"
            >Terms of use</NuxtLink
          >
          <NuxtLink
            to="/privacy"
            class="font-medium link-underline-transition color-light-400"
            >Privacy Policy</NuxtLink
          >
        </div> -->
        <div class="flex flex-column footer-links">
          <h3 class="fs-18 font-normal">Contact</h3>
          <NuxtLink
            :to="`mailto:${AppLinks.mainEmail}`"
            rel="noopener noreferrer nofollow"
            class="font-medium link-underline-transition color-light-400"
            >{{ AppLinks.mainEmail }}</NuxtLink
          >
          <h3 class="fs-18 font-normal">Social</h3>
          <div class="flex items-center" style="gap: 1.25rem">
            <NuxtLink
              v-for="social in AppSocials"
              :key="social.link"
              :to="social.link"
              :title="social.title"
              class="icon-hover-transition"
              rel="noopener"
              target="_blank"
              ><img
                loading="lazy"
                :src="social.altIcon"
                :alt="social.name"
                class="footer-social-icon"
            /></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  position: relative;
  background-color: var(--color-primary);
  border-radius: 6.4rem 6.4rem 0 0;
}

.app-footer::before {
  position: absolute;
  content: "";
}

.app-footer::after {
  position: absolute;
  content: "";
}

.footer-container {
  justify-content: space-between;
}

.links-container {
  gap: 8rem;
}

.footer-logo {
  width: 6.4rem;
  aspect-ratio: 1 / 1;
}

.footer-emoji {
  height: 1.4rem;
}

.footer-social-icon {
  width: 2.4rem;
}

.link-underline-transition:hover {
  color: var(--color-primary-light-400);
}

.footer-links {
  align-items: start;
  gap: 1.2rem;
}

@media screen and (max-width: 767px) {
  .app-footer {
    border-radius: 3.2rem 3.2rem 0 0;
  }
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .links-container {
    margin-top: 8rem;
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
