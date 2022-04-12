<template>
  <div class="card rounded-3 d-flex flex-column p-4 gap-3">
    <AtomImage
      :src="'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'"
    />
    <div class="d-flex flex-row justify-content-between gap-3">
      <AtomTitle :value="'Product 1'" />
      <AtomLabelCurrency :value="1500" />
    </div>
    <div class="d-flex flex-row justify-content-center gap-3 mt-3">
      <AtomButton
        label="More info"
        @click="goToProductDetailPage"
        class="flex-grow-1"
      />
      <AtomButton label="Add to cart" @click="addToCart" class="flex-grow-1" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AtomImage from "@/components/atoms/AtomImage.vue";
import AtomTitle from "@/components/atoms/AtomTitle.vue";
import AtomLabelCurrency from "@/components/atoms/AtomLabelCurrency.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";

export default defineComponent({
  props: {
    id: { type: String },
  },
  components: {
    AtomImage,
    AtomTitle,
    AtomLabelCurrency,
    AtomButton,
  },
  setup(props) {
    const router = useRouter();
    return {
      goToProductDetailPage: () => {
        router.push({ name: "product-detail", params: { id: props.id } });
      },
      addToCart: () => {
        // TODO
      },
    };
  },
});
</script>
