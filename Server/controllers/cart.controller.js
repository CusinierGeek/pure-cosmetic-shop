import { clearCart, saveCart } from "../queries/cart.queries.js";

export const saveCartState = async (req, res) => {
  try {
    const userId = req.body.userId;
    const cart = req.body.cartData;
    const savedCart = await saveCart(cart, userId);

    res.status(200).json(savedCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const clearUserCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await clearCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
