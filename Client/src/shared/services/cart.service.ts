import { CartItemInterface } from "../interfaces/product.interface";
import axios from "axios";
const Base_URL = "https://pure-cosmetic.ca/api/cart";
// const Base_URL = "http://localhost:8080/api/cart";
export async function saveCart(userId: string, subTotal: number, contents: CartItemInterface[]) {
  try {
    const response = await axios.post(
      `${Base_URL}/save`,
      {
        userId,
        cartData: {
          subTotal,
          contents,
        },
      },
      { withCredentials: true }
    );

    if (response.status === 200) {
      const updatedUser = response.data;

      return updatedUser;
    } else {
      throw new Error("Failed to save cart");
    }
  } catch (error: any) {
    throw new Error("An error occurred while saving the cart: " + error.message);
  }
}
