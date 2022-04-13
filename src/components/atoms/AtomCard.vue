<template>
  <div class="card rounded-3 p-4">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomCard",
  setup() {
    return {};
  },
});
</script>
