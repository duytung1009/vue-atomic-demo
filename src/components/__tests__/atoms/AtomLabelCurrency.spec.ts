import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomLabelCurrency from "@/components/atoms/AtomLabelCurrency.vue";

describe("AtomLabelCurrency", () => {
  it("Renders properly", () => {
    expect(AtomLabelCurrency).toBeTruthy();
    // render the component
    const wrapper = mount(AtomLabelCurrency, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomLabelCurrency");
    // check default props
    expect(wrapper.findAll(`.fs-4`).length).toBe(1);
  });
  it("Test value props", async () => {
    const textValue = 500;
    const wrapper = mount(AtomLabelCurrency, {
      props: {
        value: textValue,
      },
    });
    expect(wrapper.html()).toContain("$500");
  });
  it("Test size props", async () => {
    const listSize = [
      { size: "SMALL", class: "fs-6" },
      { size: "MEDIUM", class: "fs-4" },
      { size: "LARGE", class: "fs-2" },
    ];
    for (const item of listSize) {
      const wrapper = mount(AtomLabelCurrency, {
        props: {
          size: item.size,
        },
      });
      if (item.class) {
        expect(wrapper.findAll(`.${item.class}`).length).toBe(1);
      }
    }
  });
});
