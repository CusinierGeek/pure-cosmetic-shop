import * as cardsQueries from "../queries/cards.queries.js";

export const addCard = async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body.card;

    const newCard = await cardsQueries.createNewCard(userId, data);

    res.json(newCard);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteCard = async (req, res) => {
  console.log(req.body);
  try {
    const userId = req.body.userId;
    const cardId = req.body.cardId;
    const deletedCard = await cardsQueries.deleteCardById(userId, cardId);
    res.json(deletedCard);
  } catch (error) {
    res.json({ error: error.message });
  }
};
