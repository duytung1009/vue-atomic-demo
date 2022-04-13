import AtomButton from "./AtomButton.vue";

export default {
  title: "AtomButton",
  component: AtomButton,
};

export const Primary = () => ({
  components: { AtomButton },
  template: `<AtomButton type="primary">Button</AtomButton>`,
});
export const Secondary = () => ({
  components: { AtomButton },
  template: `<AtomButton type="secondary">Button</AtomButton>`,
});
