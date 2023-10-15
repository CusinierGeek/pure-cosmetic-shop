import type { OrderInterface, OrderFormInterface, OrderHistoryInterface } from "@/shared/interfaces";

import axios from "axios";

const BASE_URL = "http://api.pure-cosmetic.ca/api/orders";
// const BASE_URL = "http://localhost:8080/api/orders";

export async function fetchOrders(customerId: string): Promise<OrderHistoryInterface[]> {
  const response = await axios.post(
    BASE_URL + "/history",
    {
      customerId: customerId,
    },
    { withCredentials: true }
  );
  return response.data;
}

export async function createOrder(data: OrderFormInterface): Promise<OrderInterface> {
  const response = await axios.post(BASE_URL, data);
  return response.data;
}
