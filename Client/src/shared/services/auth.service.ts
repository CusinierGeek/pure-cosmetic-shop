import type { SigninFormInterface, UserInterface } from "@/shared/interfaces";
import axios from "axios";
const BASE_URL = "http://api.pure-cosmetic.ca/api/auth";
// const BASE_URL = "http://localhost:8080/api/auth";

export async function signIn(data: SigninFormInterface): Promise<UserInterface | null> {
  const response = await axios.post(BASE_URL, data, { withCredentials: true });

  if (!response.data.error) {
    console.log(response.data);
    return response.data;
  } else {
    console.log(response.data);
    throw new Error("Erreur dans sign-in");
  }
}

export async function signOut(): Promise<void> {
  await axios.delete(BASE_URL, { withCredentials: true });
}
