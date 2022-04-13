<template>
  <span class="text-currency fw-normal" :class="getClassSize(size)">
    {{ formatCurrency(value) }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomLabelCurrency",
  props: {
    value: { type: Number },
    size: { type: String, default: "MEDIUM" },
  },
  setup() {
    return {
      formatCurrency: (price: number) => {
        return price?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      },
      getClassSize: (size: string) => {
        switch (size) {
          case "SMALL":
            return "fs-6";
          case "MEDIUM":
            return "fs-4";
          case "LARGE":
            return "fs-2";
        }
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
