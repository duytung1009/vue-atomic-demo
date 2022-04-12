<template>
  <img :src="src" class="rounded-3 w-100 img-container" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: { type: String },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.img-container {
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background-color: $black;
}
</style>
