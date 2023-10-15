import environment from "./environment/index.js";
environment();
const PORT = process.env.HTTP_PORT;
import express from "express";
export const app = express();
import { connect } from "./database/index.js";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import cors from "cors";

app.use(
  cors({
    origin:[ "https://pure-cosmetic.ca","http://localhost:5173","http://pure-cosmetic.ca",],
    credentials: true, // Active les cookies et les en-têtes d'autorisation
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(router);

connect(() => {
  app.listen(PORT, () => {
    console.log(`Serveur NodeJS démarré sur le port: ${PORT}`);
  });
});
