import {
  createUser,
  findUserByEmail,
  findUserByID,
  deleteUserByEmail,
  createTemporaryUser,
} from "../queries/users.queries.js";
import { saveCartByEmail } from "../queries/cart.queries.js";
import { privateKey } from "../environment/keys/index.js";
import jwt from "jsonwebtoken";

//Objectif: Créer un nouvel utilisateur et le retourner au front-end
export const signup = async (req, res, next) => {
  console.log("signup");
  // tenter de creer un user dans la base de données et attraper/renvoyer l'erreur
  // si ça ne fonctionne pas.
  try {
    const user = await createUser(req.body);
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
};

//Objectif: Vérifier si l'utilisateur demandé a un jeton valide et
//          retourner les données de l'utilisateur s'il y a lieu.
export const fetchCurrentUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, privateKey, async (error, decoded) => {
        if (!error) {
          const user = await findUserByID(decoded.sub);
          if (user) {
            console.log("Fetched User", user.local.email);

            res.json(user);
            return;
          }
        } else {
          res.clearCookie("token");
          res.json(null);
        }
      });
    } else {
      res.json(null);
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      const match = user.comparePassword(req.body.password);
      if (match) {
        // on a trouvé un user valide et son mot de passe fonctionne
        deleteUserByEmail(req.body.email);
        res.json(user);
      } else {
        res.json({ error: "Bad password" });
      }
    } else {
      res.json({ error: "Bad username" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createTempUser = async (req, res, next) => {
  try {
    const cartdData = req.body;
    const data = await createTemporaryUser();

    await saveCartByEmail(cartdData, data.email);

    res.json(data);
  } catch (err) {
    res.json({ error: err.message });
  }
};
