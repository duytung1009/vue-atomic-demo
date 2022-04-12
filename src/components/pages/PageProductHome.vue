<template>
  <div class="container">
    <div class="row">
      <div class="col px-5">
        <MoleculeProductCard :id="'1'" />
      </div>
      <div class="col px-5">
        <MoleculeProductCard :id="'2'" />
      </div>
      <div class="col px-5">
        <MoleculeProductCard :id="'3'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoleculeProductCard from "@/components/molecules/MoleculeProductCard.vue";

export default defineComponent({
  components: {
    MoleculeProductCard,
  },
  setup() {
    return {};
  },
});
</script>
