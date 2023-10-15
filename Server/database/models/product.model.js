import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  discount: {
    percent: { type: Number, default: 0 },
    end_date: { type: Date, default: null },
  },
  brand: { type: String },
  name: { type: String },
  price: { type: Number },
  price_sign: { type: String },
  currency: { type: String },
  image_link: { type: String },
  product_link: { type: String },
  website_link: { type: String },
  description: { type: String },
  rating: { type: Number },
  category: { type: String },
  product_type: { type: String },
  tag_list: { type: Array },
  created_at: { type: String },
  updated_at: { type: String },
  product_api_url: { type: String },
  api_featured_image: { type: String },
  product_colors: { type: Array },
});

export default mongoose.model("Product", productSchema);
