import User from "../database/models/user.model.js";

export const createNewCard = async (userId, card) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $push: { cards: card } },
    { new: true, upsert: true }
  );
  if (!user) {
    throw new Error("User not found");
  }
  return card;
};

export const deleteCardById = async (userId, cardId) => {
  const result = await User.updateOne(
    { _id: userId },
    { $pull: { cards: { _id: cardId } } }
  );

  if (result.nModified === 0) {
    throw new Error("Card not found");
  }

  return cardId;
};
