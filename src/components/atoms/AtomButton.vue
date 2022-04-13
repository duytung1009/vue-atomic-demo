<template>
  <button
    class="btn rounded-3"
    :class="getClass()"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AtomButton",
  props: {
    type: { type: String, default: "primary" },
    isOutline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: "MEDIUM" },
  },
  emits: ["click"],
  setup(props, ctx) {
    return {
      getClass: () => {
        const results: string[] = [];
        // Type
        const btnClassType = props.type.toLowerCase();
        results.push(
          props.isOutline
            ? `btn-outline-${btnClassType}`
            : `btn-${btnClassType}`
        );
        // Size
        switch (props.size) {
          case "SMALL":
            results.push("btn-sm");
            break;
          case "MEDIUM":
            break;
          case "LARGE":
            results.push("btn-lg");
            break;
        }
        return results.join(" ");
      },
      onClick: ($event: MouseEvent) => ctx.emit("click", $event),
    };
  },
});
</script>
