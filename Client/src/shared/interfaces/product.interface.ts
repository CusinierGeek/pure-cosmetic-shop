import type { Discount } from "./discount.interface";


export interface ProductInterface {
  readonly id: number;
  discount: Discount | null;
  brand: string;
  name: string;
  price: number;
  price_sign: string | null;
  currency: string | null;
  image_link: string;
  product_link: string;
  website_link: string;
  description: null | string;
  rating: number | null;
  category: string;
  product_type: string;
  tag_list: string[];
  created_at: string;
  updated_at: string;
  product_api_url: string;
  api_featured_image: string;
  product_colors: ProductColor[];
 
}

export interface ProductColor {
  hex_value: string;
  colour_name: null | string;
}

export interface CartItemInterface {
  quantity: number;
  productId: number;
}



