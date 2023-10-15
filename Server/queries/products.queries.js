import Product from "../database/models/product.model.js";
const addDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const fetchProducts = async ({
  sortAttribute,
  sortOrder,
  brands,
  category,
  filterPrice,
  filteredRating,
  searchTerm,
  page = 1,
  pageSize = 10,
}) => {
  // Construire le filtre MongoDB

  const query = {
    ...(brands?.length ? { brand: { $in: brands } } : {}),
    ...(category?.length ? { category: { $in: category } } : {}),
    price: { $gte: filterPrice?.lower || 0, $lte: filterPrice?.upper || 5 },

    ...(filteredRating
      ? { rating: { $gte: filteredRating } }
      : { rating: { $gte: 0 } }),
    $or: [
      { brand: new RegExp(searchTerm, "i") },
      { category: new RegExp(searchTerm, "i") },
      { name: new RegExp(searchTerm, "i") },
      // ajoutez d'autres champs ici si nécessaire
    ],
  };
  // Calcul du nombre à passer pour .skip()
  const skip = (page - 1) * pageSize;
  // Options pour le tri et la pagination
  const options = {
    sort: { [sortAttribute || "name"]: sortOrder === "asc" ? 1 : -1 },
    skip: skip,
    limit: parseInt(pageSize, 10),
  };
  return await Product.find(query)
    .sort(options.sort)
    .skip(options.skip)
    .limit(options.limit);
};

export const fetchCategory = async () => {
  return await Product.distinct("category");
};

export const fetchBrands = async () => {
  return await Product.distinct("brand");
};
export const fetchProductById = async (id) => {
  return await Product.findOne({ id: id });
};

export const fetchTotalProducts = async () => {
  return await Product.countDocuments();
};

// Fonction pour générer une réduction aléatoire
const generateRandomDiscount = () => {
  const discountOptions = [10, 20, 25, 30, 40, 50];
  const randomDiscount =
    discountOptions[Math.floor(Math.random() * discountOptions.length)];
  return randomDiscount;
};

// Fonction pour générer une date de fin de réduction (60 secondes à partir de maintenant)
const generateDiscountEndDate = () => {
  const currentDate = new Date();
  const numberOfSecondsToAdd = [
    60, 120, 180, 240, 300, 360, 420, 480, 540, 600,
  ];
  currentDate.setSeconds(
    currentDate.getSeconds() +
      numberOfSecondsToAdd[
        Math.floor(Math.random() * numberOfSecondsToAdd.length)
      ]
  );
  return currentDate;
};

// Fonction pour mettre à jour la réduction des produits
export const updateProductsDiscount = async (numberOfProductsToDiscount) => {
  const productsSample = await Product.aggregate([
    { $match: { "discount.percent": 0 } },
    { $sample: { size: numberOfProductsToDiscount } },
  ]);

  const productIds = productsSample.map((product) => product._id);

  const products = await Product.find({ _id: { $in: productIds } });

  for (const product of products) {
    const discountPercent = generateRandomDiscount();
    const discountEndDate = generateDiscountEndDate();

    product.discount = {
      percent: discountPercent,
      end_date: discountEndDate,
    };

    await product.save();
  }

  console.log("Discounts generated");

  return products;
};

export const fetchSalesProducts = async () => {
  const currentDate = new Date();

  return await Product.find({
    "discount.percent": { $gt: 0 }, // Vérifie si le pourcentage de réduction est supérieur à zéro
    "discount.end_date": { $gte: currentDate }, // Vérifie si la date de fin de réduction est postérieure ou égale à la date actuelle
  });
};
