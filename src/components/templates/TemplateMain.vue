<template>
  <OrganismHeader />
  <div class="container-xl p-5">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrganismHeader from "@/components/organisms/OrganismHeader.vue";

export default defineComponent({
  components: {
    OrganismHeader,
  },
  setup() {
    return {};
  },
});
</script>
