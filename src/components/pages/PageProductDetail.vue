<template>
  <div>
    <div class="row">
      <div class="col-4">
        <AtomImage :src="product?.imageUrl" :aspectRatio="16 / 9" />
      </div>
      <div class="col-8">
        <div class="d-flex flex-row align-items-start gap-5">
          <div class="flex-grow-1 d-flex flex-column">
            <div
              class="d-flex flex-row justify-content-between align-items-center"
            >
              <AtomTextTitle :value="product?.name" size="MEDIUM" />
              <AtomLabelCurrency :value="product?.price" size="MEDIUM" />
            </div>
            <AtomTextBody :value="product?.description" class="mt-3" />
          </div>
          <OrganismProductAddToCart :item="product" class="flex-shrink-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AtomImage from "@/components/atoms/AtomImage.vue";
import AtomTextTitle from "@/components/atoms/AtomTextTitle.vue";
import AtomTextBody from "@/components/atoms/AtomTextBody.vue";
import AtomLabelCurrency from "@/components/atoms/AtomLabelCurrency.vue";
import OrganismProductAddToCart from "@/components/organisms/OrganismProductAddToCart.vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/product";

export default defineComponent({
  components: {
    AtomImage,
    AtomTextTitle,
    AtomTextBody,
    AtomLabelCurrency,
    OrganismProductAddToCart,
  },
  setup() {
    const route = useRoute();
    const productStore = useProductStore();
    const product = productStore.listProduct.find(
      (item) => item.id === Number(route.params?.id)
    );
    return {
      product,
    };
  },
});
</script>
