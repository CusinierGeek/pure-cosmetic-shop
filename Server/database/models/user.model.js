import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Address from "./address.model.js";
import Card from "./card.model.js";

const addressSchema = Address.schema;
const cardSchema = Card.schema;

const userSchema = mongoose.Schema(
  {
   
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    local: {
      email: { type: String, required: true, unique: true },
      password: { type: String },
    },
    addresses: [addressSchema],

    cards: [cardSchema],

    cartState: [],

    stripeCustomerId: { type: String, default: "" },
  },

  { timestamps: true }
);

//Objectif: Obtenir une fonction statique pour hacher le mot de passe
userSchema.statics.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const start = Date.now();
    const hashedPassword = await bcrypt.hash(password, salt);
    const end = Date.now() - start;
    console.log(`Hashed password in ` + end.toLocaleString());
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

//Objectif: Pouvoir comparer le mot de passe haché du l'utilisateur en cours
//          avec le mot de passe non-haché fourni par le front-end
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.local.password);
};

export default mongoose.model("User", userSchema);
