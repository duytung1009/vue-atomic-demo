<template>
  <AtomCard>
    <div id="organism-product-add-to-card" class="d-flex flex-column gap-4">
      <div class="d-flex justify-content-between align-items-center">
        <AtomText value="Quantity" size="SMALL"></AtomText>
        <MoleculeQuantity v-model="quantity" />
      </div>
      <AtomButton type="primary" :disabled="!quantity" @click="addToCart">
        <div class="d-flex justify-content-center align-items-center gap-1">
          <BIconCart></BIconCart>
          <AtomText value="Add to cart" size="SMALL" />
        </div>
      </AtomButton>
    </div>
  </AtomCard>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MoleculeQuantity from "@/components/molecules/MoleculeQuantity.vue";
import AtomCard from "@/components/atoms/AtomCard.vue";
import AtomText from "@/components/atoms/AtomText.vue";
import AtomButton from "@/components/atoms/AtomButton.vue";
import { useCartStore } from "@/stores/cart";
import { ProductModel } from "@/models/product.model";

export default defineComponent({
  props: {
    item: { type: ProductModel },
  },
  components: {
    MoleculeQuantity,
    AtomCard,
    AtomText,
    AtomButton,
  },
  setup(props) {
    const cartStore = useCartStore();
    const quantity = ref(1);
    return {
      quantity,
      addToCart: () => {
        if (props.item) {
          cartStore.addToCart(props.item, quantity.value);
          quantity.value = 1;
          alert("Product added to cart!");
        }
      },
    };
  },
});
</script>

<style lang="scss" scoped>
#organism-product-add-to-card {
  width: 250px;
}
</style>
