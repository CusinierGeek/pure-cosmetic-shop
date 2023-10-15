import axios from "axios";
import { AddressInterface } from "@/shared/interfaces";

const API_BASE_URL = "https://api.pure-cosmetic.ca/api/addresses";
// const API_BASE_URL = "http://localhost:8080/api/addresses";

export const postAddress = async (userId: string, address: AddressInterface) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}`,
      {
        address: address,
        userId: userId,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const patchAddress = async (userId: string, address: AddressInterface) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}`,
      {
        userId: userId,
        address: address,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAddress = async (addressId: string, userId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}`, {
      data: { addressId, userId },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
