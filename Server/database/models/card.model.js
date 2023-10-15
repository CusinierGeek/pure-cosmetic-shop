import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cardType: {
    type: String,
    required: [true, "Should have one card type"],
    enum: {
      values: ["MasterCard", "Visa", "PayPal"],
      message: "{VALUE} is not supported",
    },
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Card", cardSchema);
