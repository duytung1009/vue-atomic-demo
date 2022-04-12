<template>
  <OrganismHeader />
  <router-view />
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
