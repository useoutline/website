<script lang="ts" setup>
const emit = defineEmits(["close"]);
const email = ref("");
const newsletter = ref(false);
const formState = ref<"idle" | "submitting" | "success" | "error">("idle");

async function submitForm() {
  formState.value = "submitting";
  const { error } = await useFetch(
    "https://api.useoutline.xyz/v1/early-access-signup",
    {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        newsletter: newsletter.value,
      }),
    }
  );
  if (error.value) {
    formState.value = "error";
    return;
  }
  formState.value = "success";
}
</script>

<template>
  <AppModal @close="emit('close')">
    <form
      v-if="formState === 'idle'"
      class="flex flex-column"
      style="gap: 2rem"
      @submit.prevent="submitForm"
    >
      <h3>Join Our Early Access</h3>
      <p>
        Be among the first to experience the power of Outline Analytics! Sign up
        below to gain early access and unlock exclusive insights.
      </p>
      <p>
        As an early adopter, you'll enjoy access to our latest features and
        updates. Your feedback will also help us improve and shape the future of
        the product
      </p>
      <div class="flex flex-column" style="gap: 0.8rem">
        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="flex signup-input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E.g. abc@example.com"
              class="flex-grow"
              v-model="email"
            />
            <button class="button-primary font-bold">Subscribe</button>
          </div>
        </div>
        <div class="flex items-center" style="gap: 0.4rem">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            v-model="newsletter"
          />
          <label for="newsletter" class="fs-12" style="user-select: none">
            Subscribe to our newsletter
          </label>
        </div>
      </div>
    </form>
    <div
      v-else-if="formState === 'submitting'"
      class="flex items-center justify-center flex-column"
      style="gap: 1.2rem"
    >
      <AppLoading />
      <span>Subscribing...</span>
    </div>
    <div
      v-else-if="formState === 'success'"
      class="flex items-center justify-center flex-column"
      style="gap: 1.2rem"
    >
      <SuccessCheckAnimation style="color: var(--color-primary); width: 8rem" />
      <span
        >Thanks!
        <img src="~/assets/images/emojis/rocket.svg" style="width: 2rem" />
        You're in! Stay tuned for updates!</span
      >
    </div>
    <div
      v-else
      class="flex items-center justify-center flex-column"
      style="gap: 1.2rem"
    >
      <ErrorCrossAnimation style="color: var(--color-primary); width: 8rem" />
      <span
        >Oops!
        <img src="~/assets/images/emojis/sad-face.svg" style="width: 2rem" /> It
        seems we encountered an issue while processing your request. Please try
        again.</span
      >
      <button class="button-primary" @click="formState = 'idle'">
        Try Again
      </button>
    </div>
  </AppModal>
</template>

<style scoped>
.signup-input-group {
  gap: 1rem;
}

#newsletter {
  width: 1.2rem;
  height: 1.2rem;
}

@media screen and (max-width: 767px) {
  .signup-input-group {
    flex-direction: column;
  }
}
</style>
