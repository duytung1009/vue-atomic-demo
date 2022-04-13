<template>
  <header>
    <div class="w-100 px-6 py-3 bg-dark text-white">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between"
        >
          <AtomLogo />
          <div class="d-flex gap-3">
            <AtomButton type="light" :isOutline="true" @click="goToHomePage">
              <div class="d-flex align-items-center gap-1">
                <BIconHouse></BIconHouse>
                <AtomText value="Home" size="SMALL" />
              </div>
            </AtomButton>
            <AtomButton type="light" :isOutline="true" @click="goToCartPage">
              <div class="d-flex align-items-center gap-1">
                <BIconCart></BIconCart>
                <AtomText value="Cart" size="SMALL" />
              </div>
            </AtomButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AtomLogo from "@/components/atoms/AtomLogo.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomText from "@/components/atoms/AtomText.vue";

export default defineComponent({
  components: {
    AtomLogo,
    AtomButton,
    AtomText,
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
