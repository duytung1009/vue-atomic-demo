import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomText from "@/components/atoms/AtomText.vue";

describe("AtomText", () => {
  it("Renders properly", () => {
    expect(AtomText).toBeTruthy();
    // render the component
    const wrapper = mount(AtomText, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomText");
    // check default props
    expect(wrapper.findAll(`.fs-4`).length).toBe(1);
  });
  it("Test value props", async () => {
    const textValue = "Product 1";
    const wrapper = mount(AtomText, {
      props: {
        value: textValue,
      },
    });
    expect(wrapper.html()).toContain(textValue);
  });
  it("Test size props", async () => {
    const listSize = [
      { size: "SMALL", class: "fs-6" },
      { size: "MEDIUM", class: "fs-4" },
      { size: "LARGE", class: "fs-2" },
    ];
    for (const item of listSize) {
      const wrapper = mount(AtomText, {
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
