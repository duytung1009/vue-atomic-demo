<template>
  <div>
    <div class="row">
      <div class="col-4 px-5" v-for="product in listProduct" :key="product.id">
        <MoleculeProductCard :item="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoleculeProductCard from "@/components/molecules/MoleculeProductCard.vue";
import { useProductStore } from "@/stores/product";

export default defineComponent({
  components: {
    MoleculeProductCard,
  },
  setup() {
    const productStore = useProductStore();
    return {
      listProduct: productStore.listProduct,
    };
  },
});
</script>
