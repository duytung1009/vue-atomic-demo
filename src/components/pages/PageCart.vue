<template>
  <div id="page-cart">
    <AtomTextTitle value="Cart" size="LARGE" />
    <AtomCard class="w-100">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="col-6">
              <AtomText value="Product name" size="SMALL" />
            </th>
            <th scope="col" class="col-3">
              <AtomText value="Quantity" size="SMALL" />
            </th>
            <th scope="col" class="col-3">
              <AtomText value="Price" size="SMALL" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cart in listCart" :key="cart.product.id">
            <td>
              <AtomText :value="cart.product.name" size="SMALL" />
            </td>
            <td>
              <MoleculeQuantity v-model="cart.quantity" />
            </td>
            <td>
              <AtomLabelCurrency :value="cart.product.price" size="SMALL" />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <div class="d-flex justify-content-end">
                <AtomText value="Total" size="SMALL" />
              </div>
            </td>
            <td>
              <AtomLabelCurrency :value="totalPrice" size="SMALL" />
            </td>
          </tr>
        </tfoot>
      </table>
    </AtomCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import AtomCard from "@/components/atoms/AtomCard.vue";
import AtomText from "@/components/atoms/AtomText.vue";
import AtomTextTitle from "@/components/atoms/AtomTextTitle.vue";
import AtomLabelCurrency from "@/components/atoms/AtomLabelCurrency.vue";
import MoleculeQuantity from "@/components/molecules/MoleculeQuantity.vue";
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  components: {
    AtomCard,
    AtomText,
    AtomTextTitle,
    AtomLabelCurrency,
    MoleculeQuantity,
  },
  setup() {
    const cartStore = useCartStore();
    const totalPrice = computed(() =>
      cartStore.listCart.reduce(
        (previousValue, currentValue) =>
          previousValue + currentValue.product.price * currentValue.quantity,
        0
      )
    );
    return {
      listCart: cartStore.listCart,
      totalPrice,
    };
  },
});
</script>

<style lang="scss" scoped>
#page-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
}
</style>
