import { AddressInterface } from ".";
import { CardInterface } from ".";
import { CartItemInterface} from "@/shared/interfaces";

export interface UserInterface {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  addresses: [AddressInterface];
  cards: [CardInterface];
  cartState: [CartItemInterface];
  createdAt: Date;
  updatedAt: Date;
}

export type UserFormInterface = Partial<UserInterface>;

export interface SigninFormInterface {
  password: string;
  email: string;
}
