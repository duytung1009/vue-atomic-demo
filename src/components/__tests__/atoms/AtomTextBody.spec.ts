import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomTextBody from "@/components/atoms/AtomTextBody.vue";

describe("AtomTextBody", () => {
  it("Renders properly", () => {
    expect(AtomTextBody).toBeTruthy();
    // render the component
    const wrapper = mount(AtomTextBody, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomTextBody");
  });
  it("Test value props", async () => {
    const textValue = "Product 1";
    const wrapper = mount(AtomTextBody, {
      props: {
        value: textValue,
      },
    });
    expect(wrapper.html()).toContain(textValue);
  });
});
