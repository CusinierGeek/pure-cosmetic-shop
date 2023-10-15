import jwt from "jsonwebtoken";
import { findUserByEmail } from "../queries/users.queries.js";
import { privateKey } from "../environment/keys/index.js";

//Objectif: Vérifier si l'utilisateur existe déjà par son courriel
// si non, retourner erreur.  si oui, verifier le mot de passe (comparte)
// si mdp ok, on cree le token
export const sessionCreate = async (req, res, next) => {
  try {
    const user = await findUserByEmail(req.body.email);
    if (user) {
      const match = await user.comparePassword(req.body.password);
      if (match) {
        // on a trouvé un user valide et son mot de passe fonctionne
        const token = jwt.sign({}, privateKey, {
          subject: user._id.toString(),
          expiresIn: 60 * 60 * 24 * 30,
          algorithm: "RS256",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
          maxAge: 24 * 60 * 60 * 1000,
          
        });
        console.log("Session created !");
        res.json(user);
      } else {
        res.json({ error: "Bad password" });
        console.log("Bad password");
      }
    } else {
      res.json({ error: "Bad username" });
      console.log("Bad username");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

//Objectif: Supprimer le cookie de jeton pour déconnecter l'utilisateur
export const sessionDelete = (req, res, next) => {
  try {
    res.clearCookie("token");
    console.log("Session deleted");
    res.end();
  } catch (error) {
    res.json({ error: error.message });
  }
  //res.send({ sessionID: "SessionNo1Deleted" });
};
