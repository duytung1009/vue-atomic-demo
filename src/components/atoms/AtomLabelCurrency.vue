<template>
  <span class="text-currency fs-5 fw-normal">{{ formatCurrency(value) }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: { type: Number },
  },
  setup() {
    return {
      formatCurrency: (price: number) => {
        return price?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.text-currency {
  color: $green;
}
</style>
