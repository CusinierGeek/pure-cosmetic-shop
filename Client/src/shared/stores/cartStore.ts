import { defineStore } from "pinia";
import type { CartItemInterface, ProductInterface } from "@/shared/interfaces";
import { useUser } from "@/shared/stores";
import { fetchProductById, saveCart } from "@/shared/services";

type CartsState = {
  subTotal: number;
  contents: CartItemInterface[];
  cachedProducts: ProductInterface[];
};

export const useCart = defineStore("cart", {
  state: (): CartsState => ({
    subTotal: 0,
    contents: [],
    cachedProducts: [],
  }),
  getters: {
    getCount(): number {
      return this.contents.reduce((total, cartItem) => total + cartItem.quantity, 0);
    },
    getCartItems(): CartItemInterface[] {
      return this.contents;
    },
    getSubTotal(): number {
      return this.subTotal;
    },

    getTvq(): number {
      return this.getSubTotal * 0.09975;
    },
    getTps(): number {
      return this.getSubTotal * 0.05;
    },
    getTotal(): number {
      return this.getSubTotal + this.getTvq + this.getTps;
    },
    getShippingCost(): number {
      return this.getTotal > 200 ? 0 : 15;
    },
    getProductById: (state) => (id: number) => {
      return state.cachedProducts.find((product) => product.id === id);
    },
  },
  actions: {
    async addProduct(productId: number) {
      const found = this.contents.find((item) => item.productId === productId);
      if (found) {
        found.quantity += 1;
      } else {
        this.contents.push({ productId, quantity: 1 });
      }
      const product = await fetchProductById(productId);

      if (product) {
        this.cachedProducts.push(product);
      }

      this.calculateSubTotal();
      this.saveCart();
    },
    removeProduct(productId: number) {
      const index = this.contents.findIndex((item) => item.productId === productId);
      if (index !== -1) {
        this.contents.splice(index, 1); // this will remove the item from the array
      }

      this.calculateSubTotal();
      this.saveCart();
    },

    subtractProduct(productId: number) {
      const found = this.contents.find((item) => item.productId === productId);
      if (found) {
        found.quantity -= 1;
        if (found.quantity === 0) {
          this.contents = this.contents.filter((item) => item.productId !== productId);
        }
      }
      localStorage.setItem("cartitems", JSON.stringify(this.contents));
      this.calculateSubTotal();
      this.saveCart();
    },
    async updateCart(cart: any) {
      if (cart.length === 0) {
        this.contents = [];
        this.subTotal = 0;
        return;
      }
      this.contents = cart[0].contents;
      this.subTotal = cart[0].subTotal;
      for (const cartItem of this.contents) {
        const product = await fetchProductById(cartItem.productId);
        if (product) {
          this.cachedProducts.push(product);
        }
      }
    },

    clearCart() {
      this.contents = [];
      this.subTotal = 0;
      this.saveCart();
    },
    async calculateSubTotal() {
      let total = 0;
      for (const cartItem of this.contents) {
        const product = await fetchProductById(cartItem.productId);
        if (product?.discount && product?.discount.percent > 0) {
          total += (product.price - (product.price * product.discount.percent) / 100) * cartItem.quantity;
        } else {
          total += product ? product.price * cartItem.quantity : 0;
        }
      }
      this.subTotal = total; // Mettez à jour l'état du sous-total
      return total;
    },
    async saveCart() {
      try {
        const userId = useUser().GetUserId;
        const subTotal = this.subTotal;
        const contents = this.contents;
        if (!userId) {
          return;
        }
        const updatedUser = await saveCart(userId, subTotal, contents);
      } catch (error: any) {
        console.error(error.message);
      }
    },
  },
});
