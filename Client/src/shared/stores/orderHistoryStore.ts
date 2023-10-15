import { defineStore } from "pinia";
import { OrderInterface } from "../interfaces";
import { fetchOrders } from "@/shared/services";

interface OrderHistoryState {
  orders: OrderInterface[];
  error: any;
}

export const useOrderHistory = defineStore("orderHistory", {
  state: (): OrderHistoryState => ({
    orders: [] as OrderInterface[],
    error: null,
  }),

  getters: {
    getOrders(): OrderInterface[] {
      return this.orders;
    },
  },

  actions: {
    async fetchOrders(customerId: string) {
      try {
        const response: OrderInterface[] = await fetchOrders(customerId);
        this.orders = response;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
