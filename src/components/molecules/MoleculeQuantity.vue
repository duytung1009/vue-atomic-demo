<template>
  <div
    class="d-inline-flex flex-row justify-content-center align-items-center gap-3"
  >
    <AtomIconButton
      type="secondary"
      :isOutline="true"
      size="SMALL"
      @click="decrease"
    >
      <BIconDash></BIconDash>
    </AtomIconButton>
    <AtomText :value="modelValue?.toString()" :size="'SMALL'" />
    <AtomIconButton
      type="secondary"
      :isOutline="true"
      size="SMALL"
      @click="increase"
    >
      <BIconPlus></BIconPlus>
    </AtomIconButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomText from "@/components/atoms/AtomText.vue";
import AtomIconButton from "@/components/atoms/AtomIconButton.vue";

export default defineComponent({
  props: {
    modelValue: { type: Number, default: 0 },
  },
  components: {
    AtomText,
    AtomIconButton,
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    return {
      decrease: () => {
        if (props.modelValue > 0) {
          ctx.emit("update:modelValue", props.modelValue - 1);
        }
      },
      increase: () => {
        ctx.emit("update:modelValue", props.modelValue + 1);
      },
    };
  },
});
</script>
