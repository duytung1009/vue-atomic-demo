import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomTextTitle from "@/components/atoms/AtomTextTitle.vue";

describe("AtomTextTitle", () => {
  it("Renders properly", () => {
    expect(AtomTextTitle).toBeTruthy();
    // render the component
    const wrapper = mount(AtomTextTitle, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomTextTitle");
    // check default props
    expect(wrapper.findAll(`.fs-3`).length).toBe(1);
  });
  it("Test value props", async () => {
    const textValue = "Product 1";
    const wrapper = mount(AtomTextTitle, {
      props: {
        value: textValue,
      },
    });
    expect(wrapper.html()).toContain(textValue);
  });
  it("Test size props", async () => {
    const listSize = [
      { size: "SMALL", class: "fs-5" },
      { size: "MEDIUM", class: "fs-3" },
      { size: "LARGE", class: "fs-1" },
    ];
    for (const item of listSize) {
      const wrapper = mount(AtomTextTitle, {
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
