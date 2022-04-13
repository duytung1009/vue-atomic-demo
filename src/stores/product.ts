import { defineStore } from "pinia";
import type { ProductModel } from "@/models/product.model";

interface ProductState {
  listProduct: ProductModel[];
}

export const useProductStore = defineStore({
  id: "product",
  persist: true,
  state: () =>
    ({
      listProduct: [
        {
          id: 1,
          name: "Product 1",
          imageUrl:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          price: 500,
          description: "description",
        },
        {
          id: 2,
          name: "Product 2",
          imageUrl:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
          price: 750,
          description: "description",
        },
        {
          id: 3,
          name: "Product 3",
          imageUrl:
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: 1000,
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.`,
        },
      ],
    } as ProductState),
  getters: {},
  actions: {
    setListProduct(listProduct: ProductModel[]) {
      this.listProduct = listProduct;
    },
  },
});
