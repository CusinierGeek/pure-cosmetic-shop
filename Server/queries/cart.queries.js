import User from "../database/models/user.model.js";

export const saveCart = async (cart, userId) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { cartState: cart } },
      { new: true }
    );
    if (!user) {
      throw new Error("User not found");
    }
    return user.cart;
  } catch (error) {
    throw new Error("Error saving cart: " + error.message);
  }
};

export const saveCartByEmail = async (cart, email) => {
  try {
    const user = await User.findOneAndUpdate(
      { "local.email": email },
      { $set: { cartState: cart } },
      { new: true }
    );
    if (!user) {
      throw new Error("User not found");
    }
    return user.cart;
  } catch (error) {
    throw new Error("Error saving cart: " + error.message);
  }
};






export const clearCart = async (userId) => {
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { cart: [] } },
      { new: true }
    );
    if (!user) {
      throw new Error("User not found");
    }
    return user.cart;
  } catch (error) {
    throw new Error("Error clearing cart: " + error.message);
  }
};
