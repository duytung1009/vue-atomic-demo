import { defineStore } from "pinia";
import type { ProductModel } from "@/models/product.model";

interface CartState {
  listCart: { product: ProductModel; quantity: number }[];
}

export const useCartStore = defineStore({
  id: "cart",
  persist: true,
  state: () => ({ listCart: [] } as CartState),
  getters: {},
  actions: {
    addToCart(product: ProductModel, quantity: number) {
      const cartItemIndex = this._findIndexByProductId(product.id);
      if (cartItemIndex === -1) {
        this.listCart.push({
          product,
          quantity,
        });
      } else {
        this.listCart[cartItemIndex].quantity += quantity;
      }
    },
    changeQuantity(productId: number, quantity: number) {
      const cartItemIndex = this._findIndexByProductId(productId);
      if (cartItemIndex > -1) {
        this.listCart[cartItemIndex].quantity = quantity;
      }
    },
    remoteProduct(productId: number) {
      const cartItemIndex = this._findIndexByProductId(productId);
      if (cartItemIndex > -1) {
        this.listCart.splice(cartItemIndex, 1);
      }
    },
    _findIndexByProductId(id: number) {
      return this.listCart.findIndex((item) => item.product.id === id);
    },
  },
});
