import {
    createOrder,
    findOrderByOrderNumber,
    findOrdersByCustomer

} from "../queries/orders.queries.js";


export const checkout = async (req, res) => {
    try {
        const order = await createOrder(req.body);
        const savedOrder = await findOrderByOrderNumber(order.orderNumber);
        res.json(savedOrder);

    } catch (error) {
        res.json({ error: error.message});
    }
};


export const fetchOrdersByCustomer = async (req, res) => {
    try {
        const orders  = await findOrdersByCustomer(req.body.customerId);
        res.json(orders);
    } catch (error) {
        res.json({ error: error.message});
    }
}

