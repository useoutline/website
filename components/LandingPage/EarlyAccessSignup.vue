<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const emit = defineEmits(["close"]);
const formData = reactive({
  email: "",
  newsletter: false,
});
const formState = ref<"idle" | "submitting" | "success" | "error">("idle");
const rules = computed(() => ({
  email: { required, email },
  newsletter: {},
}));

const v$ = useVuelidate(rules, formData);

if (process.client) {
  watch(
    () => formData.email,
    () => {
      console.log("email changed", v$.value.email);
    }
  );
}

type FormBody = {
  email: string;
  newsletter?: boolean;
};

async function submitForm() {
  if (v$.value.$invalid) {
    v$.value.$touch();
    return;
  }
  formState.value = "submitting";
  const body: FormBody = {
    email: formData.email,
  };
  if (formData.newsletter) {
    body.newsletter = formData.newsletter;
  }
  const { error } = await useFetch(AppApis.EarlyAccessSignup, {
    method: "POST",
    body: JSON.stringify(body),
  });
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
            <div class="flex flex-column flex-grow" style="gap: 0.6rem">
              <input
                type="email"
                id="email"
                placeholder="E.g. abc@example.com"
                class="flex-grow"
                v-model="formData.email"
                :class="{ 'input-error': v$.email.$dirty && v$.email.$invalid }"
                @keyup="v$.email.$touch"
              />
              <div
                v-if="v$.email.$dirty && v$.email.$invalid"
                class="color-error-100 fs-14"
              >
                <span v-if="v$.email.email.$invalid">Email is invalid</span>
                <span v-else-if="v$.email.required.$invalid"
                  >Email is required</span
                >
              </div>
            </div>
            <button class="button-primary font-bold">Subscribe</button>
          </div>
        </div>
        <div class="flex items-center" style="gap: 0.4rem">
          <input
            type="checkbox"
            id="newsletter"
            v-model="formData.newsletter"
          />
          <label for="newsletter" class="fs-14" style="user-select: none">
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
        You're in! We'll notify you via email as soon as we launch our early
        access! Stay tuned for updates!</span
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
  align-items: start;
}

.input-error {
  border-color: var(--color-error-100);
}

#newsletter {
  width: 1.2rem;
  height: 1.2rem;
}

@media screen and (max-width: 767px) {
  .signup-input-group {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
