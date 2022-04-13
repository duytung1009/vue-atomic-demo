import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomButton from "@/components/atoms/AtomButton.vue";

describe("AtomButton", () => {
  it("Renders properly", () => {
    expect(AtomButton).toBeTruthy();
    // render the component
    const wrapper = mount(AtomButton, {
      slots: {
        default: `<span class="fake-msg">test</span>`,
      },
    });
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomButton");
    // check that the slot is rendered
    expect(wrapper.findAll(".fake-msg").length).toBe(1);
    // check default props
    expect(wrapper.findAll(`.btn-primary`).length).toBe(1);
  });
  it("Test type props", async () => {
    const listType = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];
    for (const type of listType) {
      const wrapper = mount(AtomButton, {
        props: {
          type,
        },
      });
      expect(wrapper.findAll(`.btn-${type}`).length).toBe(1);
    }
  });
  it("Test size props", async () => {
    const listSize = [
      { size: "SMALL", class: "btn-sm" },
      { size: "MEDIUM", class: "" },
      { size: "LARGE", class: "btn-lg" },
    ];
    for (const item of listSize) {
      const wrapper = mount(AtomButton, {
        props: {
          size: item.size,
        },
      });
      if (item.class) {
        expect(wrapper.findAll(`.${item.class}`).length).toBe(1);
      }
    }
  });
  it("Test isOutline props", async () => {
    const listType = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];
    for (const type of listType) {
      const wrapper = mount(AtomButton, {
        props: {
          type,
          isOutline: true,
        },
      });
      expect(wrapper.findAll(`.btn-outline-${type}`).length).toBe(1);
    }
  });
  it("Test disabled props", async () => {
    const wrapper = mount(AtomButton, {
      props: {
        disabled: true,
      },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()["click"]).toBeUndefined();
  });
  it("Test click event", async () => {
    const wrapper = mount(AtomButton, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
