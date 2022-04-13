<template>
  <span class="fs-6 fw-normal">{{ value }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomTextBody",
  props: {
    value: { type: String },
  },
  setup() {
    return {};
  },
});
</script>
