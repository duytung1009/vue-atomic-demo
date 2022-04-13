<template>
  <span class="fw-normal" :class="getClassSize(size)">{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: { type: String },
    size: { type: String, default: "MEDIUM" },
  },
  setup() {
    return {
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
