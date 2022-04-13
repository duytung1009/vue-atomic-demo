import AtomCard from "./AtomCard.vue";

export default {
  title: "AtomCard",
  component: AtomCard,
};

export const Primary = () => ({
  components: { AtomCard },
  template: "<AtomCard><span>text</span></AtomCard>",
});
