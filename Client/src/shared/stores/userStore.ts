import { defineStore } from "pinia";
import { signIn, fetchCurrentUser, createUser, signOut, deleteCard, addCard } from "@/shared/services/";
import type {
  UserInterface,
  UserFormInterface,
  SigninFormInterface,
  AddressInterface,
  ApiAddressResponse,
  CardInterface,
} from "@/shared/interfaces";
import { postAddress, patchAddress, deleteAddress } from "@/shared/services";
import { useCart } from "@/shared/stores";
import { createTemporaryUser } from "@/shared/services";
import { useRouter } from "vue-router";

interface UserState {
  //Ici currentUser = undefined veut dire qu'on a pas encore fait de fetchCurrentUser
  //S'il est à null c'est qu'on a fait le fetchCurrentUser et qu'on a pas de user
  currentUser: UserInterface | null | undefined;
  error: any;
}

export const useUser = defineStore("user", {
  state: (): UserState => ({
    currentUser: undefined,
    error: null,
  }),
  getters: {
    //Objectif: Retourner vrai si l'utilisateur est authentifié
    isAuthenticated(): boolean {
      return !!this.currentUser;
    },

    GetUserId(): string | undefined {
      if (this.currentUser) {
        return this.currentUser._id;
      }
      return undefined;
    },

    GetUser(): UserInterface | undefined {
      if (this.currentUser) {
        return this.currentUser;
      }
      return undefined;
    },
  },
  actions: {
    //Objectif: Appeler le service de création d'utilisateur et mettre à jour le currentUser
    async createUser(data: UserFormInterface) {
      try {
        this.currentUser = await createUser(data);
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },
    async checkoutAsGuest() {
      try {
        // Créez un utilisateur temporaire en utilisant un service approprié
        const temporaryUser = await createTemporaryUser(); // Remplacez createTemporaryUser par la fonction appropriée

        // Remplacez cartStore.subTotal et cartStore.contents par les valeurs appropriées

        // Connectez-vous en tant qu'invité en utilisant les informations de l'utilisateur temporaire
        this.currentUser = temporaryUser;

        // Redirigez l'utilisateur vers la page de paiement ou de checkout
        const router = useRouter();
        router.push("/checkout");
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    async addAddress(address: AddressInterface) {
      try {
        const userId = this.GetUserId;
        if (!userId) {
          throw new Error("User not found");
        }
        const response = await postAddress(userId, address);
        this.currentUser?.addresses.push(response);
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    async updateAddress(address: AddressInterface) {
      try {
        if (!this.currentUser) {
          throw new Error("User not found");
        }
        const userId = this.currentUser._id;
        const response: ApiAddressResponse = await patchAddress(userId, address);
        const index = this.currentUser?.addresses.findIndex((a) => a._id === response._id);
        if (index !== -1) {
          this.currentUser?.addresses.splice(index, 1, response as AddressInterface);
        }
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    async deleteAddress(addressId: string) {
      try {
        const userId = this.currentUser?._id;
        if (!userId) {
          throw new Error("User not found");
        }
        const response = await deleteAddress(addressId, userId);
        this.currentUser = response;
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    //Objectif: Appeler le service de connexion d'utilisateur et mettre à jour le currentUser
    async signIn(data: SigninFormInterface) {
      try {
        this.currentUser = await signIn(data);
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    //Objectif: Appeler le service de récupération d'utilisateur et mettre à jour le currentUser
    async fetchCurrentUser() {
      const cartStore = useCart();
      try {
        this.currentUser = await fetchCurrentUser();
       
        if (this.currentUser) {
          cartStore.updateCart(this.currentUser?.cartState);
        }

        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
        console.log(error);
      }
    },

    async deleteCard(cardId: string) {
      try {
        const userId = this.currentUser?._id;
        if (!userId) {
          throw new Error("User not found");
        }
        const response = await deleteCard(cardId);
        this.currentUser = response;
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    async addCard(card: CardInterface) {
      try {
        const userId = this.currentUser?._id;
        if (!userId) {
          throw new Error("User not found");
        }
        const response = await addCard(card);
        this.currentUser = response;
        this.error = null;
      } catch (error) {
        this.currentUser = undefined;
        this.error = error;
      }
    },

    //Objectif: Appeler le service de déconexxion d'utilisateur et mettre à jour le currentUser
    async signOut() {
      try {
        await signOut();
        this.currentUser = undefined;
        this.error = null;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
