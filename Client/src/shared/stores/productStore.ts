/**
 * Product Store using Pinia and Axios.
 *
 * The purpose of this store is to manage the state and interactions related to products.
 * This includes fetching products from an API, handling filters, sorting, and pagination.
 *
 * Features include:
 * - Fetching products from an API based on various criteria like brands, categories, etc.
 * - Providing getters to fetch category and brand names.
 * - Using pagination for fetching products.
 *
 */

// Importing required modules and types
import { defineStore } from "pinia";
import { ProductInterface } from "@/shared/interfaces";

import { fetchProducts, generateSales, fetchDiscountedPrice, getCategoryNames, getBrandNames } from "@/shared/services";

// Enums to define sorting attributes and order
export enum SortAttributes {
  PRICE = "price",
  RATING = "rating",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

// Interface to describe the shape of the product store state
interface ProductsState {
  sales: ProductInterface[];
  products: ProductInterface[];
  cachedProducts: ProductInterface[];
  filterBrands: string[];
  filterCategories: string[];
  filterPrice: {
    lower: number;
    upper: number;
  };
  filteredRating: number;
  sortAttribute: SortAttributes | null;
  sortOrder: SortOrder;
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  totalProducts: number;
}
// Store definition
export const useProducts = defineStore("products", {
  state: (): ProductsState => ({
    // initial state
    sales: [],
    products: [],
    cachedProducts: [],
    sortAttribute: null,
    sortOrder: SortOrder.ASC,
    filterBrands: [],
    filterCategories: [],
    filterPrice: {
      lower: 0,
      upper: 100,
    },
    filteredRating: 0,
    searchTerm: "",
    currentPage: 1,
    totalPages: 10,

    totalProducts: 0,
  }),

  actions: {
    // action methods
    async fetchProducts() {
      const queryParameters = {
        sortAttribute: this.sortAttribute,
        sortOrder: this.sortOrder,
        brands: this.filterBrands,
        category: this.filterCategories,
        filterPrice: this.filterPrice,
        filteredRating: this.filteredRating,
        searchTerm: this.searchTerm,
        page: this.currentPage,
        pageSize: this.totalPages,
      };

      try {
        const data = await fetchProducts(queryParameters);
        this.products = data.products;
        this.cachedProducts = this.products;
        this.totalProducts = data.totalProducts;
        this.sales = data.salesProducts;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async generateSales(numberOfSales: number) {
      try {
        const sales = await generateSales(numberOfSales);
        this.sales.push(...sales);
      } catch (error) {
        console.error("Error generating sales:", error);
      }
    },

    setSortAttribute(attribute: string) {
      this.sortAttribute = attribute as SortAttributes;
      this.fetchProducts();
    },

    toggleSortOrder() {
      this.sortOrder = this.sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
      this.fetchProducts();
    },

    setFilterBrands(brands: string[]) {
      this.filterBrands = brands;
      this.fetchProducts();
    },

    setFilterCategories(categories: string[]) {
      this.filterCategories = categories;
      this.fetchProducts();
    },

    setSearchTerm(term: string) {
      this.searchTerm = term;
      this.fetchProducts();
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
      this.fetchProducts();
    },

    setTotalPages(pages: number) {
      this.totalPages = pages;
      this.fetchProducts();
    },
    setFileteredRating(rating: number) {
      this.filteredRating = rating;
      this.fetchProducts();
    },
    setFilterPriceUpper(upper: number) {
      this.filterPrice.upper = upper;
      this.fetchProducts();
    },
    setFilterPriceLower(lower: number) {
      this.filterPrice.lower = lower;
      this.fetchProducts();
    },
    removeSale(id: number) {
      const productIndex = this.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        this.products[productIndex].discount = null;
      }
      this.sales = this.sales.filter((product) => product.id !== id);
    },

    async fetchDiscountedPrice(productId: number): Promise<number> {
      try {
        const price = await fetchDiscountedPrice(productId);
        return price;
      } catch (error) {
        console.error("Error fetching discounted price:", error);
        return 0; // Handle the error appropriately, returning a default value here
      }
    },
  },

  getters: {
    // getter methods

    async getCategoryNames() {
      return await getCategoryNames();
    },

    async getBrandNames() {
      return await getBrandNames();
    },

    getTotalProducts(): number {
      return this.totalProducts;
    },

    getCachedProducts(): ProductInterface[] {
      return this.cachedProducts;
    },
    getSales(): ProductInterface[] {
      return this.sales;
    },
  },
});
