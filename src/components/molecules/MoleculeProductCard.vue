<template>
  <AtomCard>
    <div class="d-flex flex-column gap-3">
      <AtomImage :src="item.imageUrl" :aspectRatio="16 / 9" />
      <div class="d-flex flex-row justify-content-between gap-3">
        <AtomTextTitle :value="item.name" size="SMALL" />
        <AtomLabelCurrency :value="item.price" size="SMALL" />
      </div>
      <div class="d-flex flex-row justify-content-center gap-3 mt-3">
        <AtomButton
          type="secondary"
          @click="goToProductDetailPage"
          class="flex-grow-1"
        >
          <AtomText value="More info" size="SMALL" />
        </AtomButton>
        <AtomButton type="primary" @click="addToCart" class="flex-grow-1">
          <AtomText value="Add to cart" size="SMALL" />
        </AtomButton>
      </div>
    </div>
  </AtomCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AtomCard from "@/components/atoms/AtomCard.vue";
import AtomImage from "@/components/atoms/AtomImage.vue";
import AtomText from "@/components/atoms/AtomText.vue";
import AtomTextTitle from "@/components/atoms/AtomTextTitle.vue";
import AtomLabelCurrency from "@/components/atoms/AtomLabelCurrency.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import { useCartStore } from "@/stores/cart";
import { ProductModel } from "@/models/product.model";

export default defineComponent({
  props: {
    item: { type: ProductModel },
  },
  components: {
    AtomCard,
    AtomImage,
    AtomText,
    AtomTextTitle,
    AtomLabelCurrency,
    AtomButton,
  },
  setup(props) {
    const router = useRouter();
    const cartStore = useCartStore();
    return {
      goToProductDetailPage: () => {
        router.push({ name: "product-detail", params: { id: props.item?.id } });
      },
      addToCart: () => {
        if (props.item) {
          cartStore.addToCart(props.item, 1);
          alert("Product added to cart!");
        }
      },
    };
  },
});
</script>
