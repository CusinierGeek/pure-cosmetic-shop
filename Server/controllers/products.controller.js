import {
  fetchProducts,
  fetchCategory,
  fetchBrands,
  fetchProductById,
  fetchTotalProducts,
  updateProductsDiscount,
  fetchSalesProducts,
} from "../queries/products.queries.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await fetchProducts(req.query);
    const totalProducts = await fetchTotalProducts(req.query);
    const salesProducts = await fetchSalesProducts();


    res.status(200).json({ products, totalProducts, salesProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const category = await fetchCategory();
    res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getBrands = async (req, res, next) => {
  try {
    const brands = await fetchBrands();
    res.status(200).json({ brands });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await fetchProductById(parseInt(req.params.id));
    res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const generateDiscount = async (req, res, next) => {
  try {
    const sales = await updateProductsDiscount(parseInt(req.params.number));
    res.status(200).json({ sales: sales });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
