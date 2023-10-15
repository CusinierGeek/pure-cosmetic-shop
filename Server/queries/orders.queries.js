import Order from "../database/models/order.model.js";

export const createOrder = (data) => {

    const newOrder = new Order({
        orderNumber: "ABC" + Math.floor(Math.random() * 1000000),
        orderDate: new Date(),
        orderStatus: "Pending",
        orderItems: data.orderItems,
        customerId: data.customerId,
        shippingInfoFullName: data.shippingInfoFullName,
        shippingInfoPhoneNumber: data.shippingInfoPhoneNumber,
        shippingInfoStreet: data.shippingInfoStreet,
        shippingInfoCity: data.shippingInfoCity,
        shippingInfoCountry: data.shippingInfoCountry,
        shippingInfoZipcode: data.shippingInfoZipcode,
        creditCardNumber: data.creditCardNumber,
        creditCardExpirationDate: data.creditCardExpirationDate,
        creditCardCVV: data.creditCardCVV,
        giftCardNumber: data.giftCardNumber,
        giftCardPin: data.giftCardPin,
        total: data.total
    });

    return newOrder.save();

}

export const findOrderByOrderNumber = (orderNumber) => {

    return Order.findOne({ "orderNumber": orderNumber });

}

export const findOrdersByCustomer = (customer) => {
        return Order.find({ "customerId": customer });
    
}

