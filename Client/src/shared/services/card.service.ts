import axios from "axios";
import type { CardInterface } from "@/shared/interfaces";
import { useUser } from "../stores";
const BASE_URL = "http://api.pure-cosmetic.ca/api/cards";
// const BASE_URL = "http://localhost:8080/api/cards";

export async function addCard(card: CardInterface) {
  const userStore = useUser();
  const userId = userStore.GetUserId;
  const response = await axios.post(
    `${BASE_URL}`,
    {
      userId: userId,
      card: card,
    },
    { withCredentials: true }
  );
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error("Erreur dans Add Card " + response.data.error);
  }
}

export async function deleteCard(cardId: string) {
  const userStore = useUser();
  const userId = userStore.GetUserId;
  const response = await axios.delete(`${BASE_URL}`, {
    data: {
      userId: userId,
      cardId: cardId,
    },
    withCredentials: true,
  });
  if (!response.data.error) {
    return response.data;
  } else {
    throw new Error("Erreur dans Delete Card " + response.data.error);
  }
}
