import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomLogo from "@/components/atoms/AtomLogo.vue";

describe("AtomLogo", () => {
  it("Renders properly", () => {
    expect(AtomLogo).toBeTruthy();
    // render the component
    const wrapper = mount(AtomLogo, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomLogo");
    // check that the slot is rendered
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
