<template>
  <span class="fw-normal" :class="getClassSize(size)">{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomTextTitle",
  props: {
    value: { type: String },
    size: { type: String, default: "MEDIUM" },
  },
  setup() {
    return {
      getClassSize: (size: string) => {
        switch (size) {
          case "SMALL":
            return "fs-5";
          case "MEDIUM":
            return "fs-3";
          case "LARGE":
            return "fs-1";
        }
      },
    };
  },
});
</script>
