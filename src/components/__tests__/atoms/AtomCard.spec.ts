import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomCard from "@/components/atoms/AtomCard.vue";

describe("AtomCard", () => {
  it("Renders properly", () => {
    expect(AtomCard).toBeTruthy();
    // render the component
    const wrapper = mount(AtomCard, {
      slots: {
        default: `<span class="fake-msg">test</span>`,
      },
    });
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomCard");
    // check that the slot is rendered
    expect(wrapper.findAll(".fake-msg").length).toBe(1);
  });
});
