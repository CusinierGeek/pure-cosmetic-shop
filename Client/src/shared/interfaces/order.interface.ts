import { CartItemInterface } from "./product.interface"

export interface OrderInterface {
  customerId: String;
  orderItems: CartItemInterface[];
  shippingInfoFullName: String;
  shippingInfoStreet: String;
  shippingInfoCity: String;
  shippingInfoCountry: String;
  shippingInfoZipcode: String;
  creditCardNumber: String;
  creditCardExpirationDate: String;
  creditCardCVV: String;
  giftCardNumber: String;
  giftCardPin: String;
  total: number;
}

export interface OrderHistoryInterface {
  orderNumber: String;
  orderDate: Date;
  orderStatus: String;
  orderItems: CartItemInterface[];
  customerId: String;
  shippingInfoFullName: String;
  shippingInfoPhoneNumber: String;
  shippingInfoStreet: String;
  shippingInfoCity: String;
  shippingInfoCountry: String;
  shippingInfoZipcode: String;
  creditCardNumber: String;
  creditCardExpirationDate: String;
  creditCardCVV: String;
  giftCardNumber: String;
  giftCardPin: String;
  total: number;
}

export type OrderFormInterface = Partial<OrderInterface>;

