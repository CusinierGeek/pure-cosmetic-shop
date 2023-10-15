import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

// Récupère le chemin du fichier actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Charge la configuration Dotenv depuis le fichier .env.development
dotenv.config({ path: path.resolve(__dirname, "../.env.development") });

export default () => {
   process.env.NODE_ENV.trim() || "development";
   const PORT = process.env.PORT || 5000;
};
