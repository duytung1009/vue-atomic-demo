<template>
  <img
    :src="src"
    class="rounded-3 w-100 img-container"
    :style="{ 'aspect-ratio': aspectRatio }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    src: { type: String },
    aspectRatio: { type: Number, default: 16 / 9 },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.img-container {
  object-fit: contain;
  background-color: $black;
}
</style>
