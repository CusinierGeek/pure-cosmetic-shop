import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
   
    doorNumber: {
      type: String,
      required: true,
    },

    street: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    zipcode: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },
  { _id: true }
);

export default mongoose.model("Address", addressSchema);
