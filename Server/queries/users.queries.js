import User from "../database/models/user.model.js";
import { v4 as uuidv4 } from "uuid";

//Objectif: Récupérer les données de l'utilisateur par son ID
export const findUserByID = (id) => {
  return User.findById(id).select("-local.password");
};
export const findUserByIDandPopulate = (id) => {
  return User.findById(id).populate("addresses").select("-local.password");
};

//Objectif: Récupérer les données de l'utilisateur par son courriel
export const findUserByEmail = (email) => {
  return User.findOne({ "local.email": email });
};

//Objectif: Créer un nouvel utilisateur avec mot de passe haché
export const createUser = async (data) => {
  const user = await findUserByEmail(data.email);
  if (user) throw new Error("Courriel déjà utilisé");

  // rendu ici, on a un nouveau user en création.
  const hashedPassword = await User.hashPassword(data.password);
  const newUser = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    local: {
      email: data.email,
      password: hashedPassword,
    },
  });
  console.log(data);
  return newUser.save();
};

export const deleteUserByEmail = (email) => {
  findUserByEmail(email).then((user) => {
    if (user) {
      user.delete();
      console.log("User deleted");
    } else {
      console.log("User not found");
    }
  });
};
export const createTemporaryUser = async () => {
  try {
    const temporaryUserId = generateUniqueUserId();
    const temporaryPassword = generateTemporaryPassword();

    // Utilisez la méthode de hachage de mot de passe du modèle User
    const hashedPassword = await User.hashPassword(temporaryPassword);

    const newUser = new User({
      firstName: "Guest",
      lastName: "User",
      local: {
        email: `guest_${temporaryUserId}@example.com`,
        password: hashedPassword,
      },
    });

    await newUser.save();

    // Ne renvoyez jamais de mot de passe en clair dans la réponse
    // Vous pouvez renvoyer l'e-mail de l'utilisateur temporaire
    return { email: newUser.local.email, password: temporaryPassword };
  } catch (error) {
    // Gérez les erreurs, par exemple en renvoyant une réponse d'erreur
    res.status(500).json({
      error: "Erreur lors de la création de l'utilisateur temporaire",
    });
  }
};

// Fonction pour générer un identifiant unique pour l'utilisateur temporaire (exemple d'implémentation)
function generateUniqueUserId() {
  return uuidv4();
}

// Fonction pour générer un mot de passe temporaire (exemple d'implémentation)
function generateTemporaryPassword() {
  return "soleil";
}
