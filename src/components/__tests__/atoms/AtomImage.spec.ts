import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AtomImage from "@/components/atoms/AtomImage.vue";

describe("AtomImage", () => {
  it("Renders properly", () => {
    expect(AtomImage).toBeTruthy();
    // render the component
    const wrapper = mount(AtomImage, {});
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AtomImage");
  });
  it("Test src props", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e";
    const wrapper = mount(AtomImage, {
      props: {
        src: imageUrl,
      },
    });
    expect(wrapper.html()).toContain(imageUrl);
  });
  // it("Test aspectRatio props", async () => {
  //   const aspectRatio = 1;
  //   const wrapper = mount(AtomImage, {
  //     props: {
  //       aspectRatio: 16 / 9,
  //     },
  //   });
  //   expect(wrapper.attributes().style).toBe(`aspect-ratio: ${aspectRatio};`);
  //   // expect(wrapper.html()).toContainEqual(
  //   //   `style="aspect-ratio: ${aspectRatio};"`
  //   // );
  // });
});
