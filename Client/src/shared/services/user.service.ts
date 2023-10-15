import type { UserFormInterface, UserInterface, CardInterface } from "@/shared/interfaces";
import axios from "axios";
import { signIn } from ".";
import { useCart } from "@/shared/stores";

const BASE_URL = "https://pure-cosmetic.ca/api/users";
// const BASE_URL = "http://localhost:8080/api/users";

export async function createUser(partialUser: UserFormInterface): Promise<UserInterface | null> {
  const response = await axios.post(BASE_URL, partialUser, { withCredentials: true });
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error("Create user n'a pas fonctionné " + response.data.error);
  }
}

export async function fetchCurrentUser(): Promise<UserInterface | null> {
  const response = await axios.get(BASE_URL, { withCredentials: true });
  if (!response.data?.error) {
    console.log(response.headers);
    return response.data;
  } else {
    throw new Error("Erreur dans Fetch Current User " + response.data.error);
  }
}

export async function createTemporaryUser(): Promise<UserInterface | null> {
  try {
    const cartStore = useCart();

    // Créez l'utilisateur temporaire
    const response = await axios.post(
      `${BASE_URL}/temp`,
      {
        subTotal: cartStore.subTotal,
        contents: cartStore.contents,
      },
      { withCredentials: true }
    );

    if (!response.data?.error) {
      // Si la création réussit, sign-in l'utilisateur temporaire
      const signInResponse = await signIn({
        email: response.data.email,
        password: response.data.password,

      });

      if (!signInResponse) {
        throw new Error("Sign-in a échoué pour l'utilisateur temporaire.");
      }
      return signInResponse;
    } else {
      throw new Error("Erreur dans Create Temporary User " + response.data.error);
    }
  } catch (error: any) {
    throw new Error("Erreur dans Create Temporary User and Sign-in: " + error.message);
  }
}
