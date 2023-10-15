import axios from "axios";
// Define the base URL for the API
// const BASE_URL = "https://api.pure-cosmetic.ca/api/products";
const BASE_URL = "http://localhost:8080/api/products";

// Function to fetch products from the API
export async function fetchProducts(queryParameters: any) {
  try {
    const response = await axios.get(BASE_URL, { params: queryParameters ,withCredentials:true});
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error to handle it in the component
  }
}

// Function to generate sales
export async function generateSales(numberOfSales: number) {
  try {
    const response = await axios.get(`${BASE_URL}/discount/${numberOfSales}`,{withCredentials:true});
    return response.data.sales;
  } catch (error) {
    console.error("Error generating sales:", error);
    throw error;
  }
}

// Function to fetch a product by ID
export async function fetchProductById(productId: number) {
  try {
    const url = `${BASE_URL}/${productId.toString(), {withCredentials:true}}`;
    const response = await axios.get(url);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
}

// Function to fetch discounted price for a product by ID
export async function fetchDiscountedPrice(productId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`, {withCredentials:true});
    return response.data.product.discount?.discountedPrice ?? response.data.product.price;
  } catch (error) {
    console.error("Error fetching discounted price:", error);
    throw error;
  }
}

// Function to fetch category names
export async function getCategoryNames() {
  try {
    const response = await axios.get(`${BASE_URL}/category`, {withCredentials:true});
    return response.data.category;
  } catch (error) {
    console.error("Error fetching category names:", error);
    throw error;
  }
}

// Function to fetch brand names
export async function getBrandNames() {
  try {
    const response = await axios.get(`${BASE_URL}/brands`, {withCredentials:true});
    return response.data.brands;
  } catch (error) {
    console.error("Error fetching brand names:", error);
    throw error;
  }
}
