import { defineStore } from "pinia";
import { createOrder } from "@/shared/services";
import type { OrderInterface } from "@/shared/interfaces";

interface OrderState {
  order: OrderInterface;
  error: any;
}

export const useOrder = defineStore("order", {
  state: (): OrderState => ({
    order: {
      customerId: "",
      orderItems: [],
      shippingInfoFullName: "",
      shippingInfoStreet: "",
      shippingInfoCity: "",
      shippingInfoCountry: "",
      shippingInfoZipcode: "",
      creditCardNumber: "",
      creditCardExpirationDate: "",
      creditCardCVV: "",
      giftCardNumber: "",
      giftCardPin: "",
      total: 0,
    },
    error: null,
  }),

  getters: {
    getOrder(): OrderInterface {
      return this.order;
    },
  },

  actions: {
    setCustomerId(customerId: String) {
      this.order!.customerId = customerId;
    },

    setOrderItems(orderItems: any) {
      this.order!.orderItems = orderItems;
    },

    setShippingInfoFullName(fullName: String) {
      this.order!.shippingInfoFullName = fullName;
    },

    setShippingInfoStreet(street: String) {
      this.order!.shippingInfoStreet = street;
    },

    setShippingInfoCity(city: String) {
      this.order!.shippingInfoCity = city;
    },

    setShippingInfoCountry(country: String) {
      this.order!.shippingInfoCountry = country;
    },

    setShippingInfoZipcode(zipcode: String) {
      this.order!.shippingInfoZipcode = zipcode;
    },

    setCreditCardNumber(creditCardNumber: String) {
      this.order!.creditCardNumber = creditCardNumber;
    },

    setCreditCardExpirationDate(creditCardExpirationDate: String) {
      this.order!.creditCardExpirationDate = creditCardExpirationDate;
    },

    setCreditCardCVV(creditCardCVV: String) {
      this.order!.creditCardCVV = creditCardCVV;
    },

    setGiftCardNumber(giftCardNumber: String) {
      this.order!.giftCardNumber = giftCardNumber;
    },

    setGiftCardPin(giftCardPin: String) {
      this.order!.giftCardPin = giftCardPin;
    },

    setTotal(total: number) {
      this.order!.total = total;
    },

    async createOrder() {
      try {
        const order: OrderInterface = await createOrder(this.order!);
        this.order = order;
        this.error = null;
        return order;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
