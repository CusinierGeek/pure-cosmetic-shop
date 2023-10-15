import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    orderNumber: { type: String, required: true },
    orderDate: { type: Date, required: true },
    orderStatus: { type: String, required: true },
    orderItems: { type: Array, required: true },
    customerId: { type: String, required: true },
    shippingInfoFullName: { type: String, required: true },
    shippingInfoStreet: { type: String, required: true },
    shippingInfoCity: { type: String, required: true },
    shippingInfoCountry: { type: String, required: true },
    shippingInfoZipcode: { type: String, required: true },
    creditCardNumber: { type: String, required: true },
    creditCardExpirationDate: { type: String, required: true },
    creditCardCVV: { type: String, required: true },
    giftCardNumber: { type: String, required: false },
    giftCardPin: { type: String, required: false },
    total: { type: Number, required: true }

});



export default mongoose.model("Order", orderSchema);
