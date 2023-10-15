import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs";
import Product from "../database/models/product.model.js";
import * as db from "../database/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ITEM_FILE = resolve(__dirname, "makeup.json");

const items = JSON.parse(fs.readFileSync(ITEM_FILE, "utf8"));

db.connect(() => {
  const totalItems = items.length;
  let importedItems = 0;
  // Supprimer tous les documents de la collection avant de commencer l'importation
  Product.deleteMany({})
    .then(() => {
      console.log("Tous les items ont été supprimés. Importation des items...");

      items.forEach((itemData) => {
        const newProduct = new Product({
          id: itemData.id,
          brand: itemData.brand,
          name: itemData.name,
          price: itemData.price,
          price_sign: itemData.price_sign,
          currency: itemData.currency,
          image_link: itemData.image_link,
          product_link: itemData.product_link,
          website_link: itemData.website_link,
          description: itemData.description,
          rating: itemData.rating,
          category: itemData.category,
          product_type: itemData.product_type,
          tag_list: itemData.tag_list,
          created_at: itemData.created_at,
          updated_at: itemData.updated_at,
          product_api_url: itemData.product_api_url,
          api_featured_image: itemData.api_featured_image,
          product_colors: itemData.product_colors,
        });

        newProduct
          .save()
          .then(() => {
            importedItems++;
            const progressPercentage = (importedItems / totalItems) * 100;
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`${progressPercentage.toFixed(0)}% effectués`);
          })
          .catch((error) => {
            console.error("Error saving item", error);
          })
          .finally(() => {
            if (importedItems === totalItems) {
              console.log("\nImportation terminée !");
              process.exit(0);
            }
          });
      });
    })
    .catch((error) => {
      console.error("Error deleting documents", error);
    });
});
