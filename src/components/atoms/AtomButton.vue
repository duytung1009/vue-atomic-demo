<template>
  <button class="btn btn-primary rounded-3" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: { type: String },
  },
  emits: ["click"],
  setup(props, ctx) {
    return {
      onClick: ($event: MouseEvent) => ctx.emit("click", $event),
    };
  },
});
</script>
