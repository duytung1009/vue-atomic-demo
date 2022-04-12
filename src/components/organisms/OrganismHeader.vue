<template>
  <header
    class="absolute inset-x-0 text-gray-100 py-4 flex flex-wrap items-center"
  >
    <div
      class="w-full md:w-3/4 px-4 pb-4 md:pb-0 flex items-center justify-between"
    >
      <AtomLogo />
    </div>
    <div class="w-full md:w-1/4 px-4">
      <AtomButton label="Home" @click="goToHomePage" />
      <AtomButton label="Cart" @click="goToCartPage" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AtomLogo from "@/components/atoms/AtomLogo.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
// import MoleculeLinks from "@/components/atoms/MoleculeLinks";

export default defineComponent({
  components: {
    AtomLogo,
    AtomButton,
    // MoleculeLinks,
  },
  setup() {
    const router = useRouter();
    return {
      goToHomePage: () => {
        router.push({ name: "product-home" });
      },
      goToCartPage: () => {
        router.push({ name: "product-cart" });
      },
    };
  },
});
</script>
