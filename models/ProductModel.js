import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  category: String,
  mainCategory: String,
  subCategory: String,
  company: String,
  price: Number,
  title: String,
  image: String,
  description: String,
  howToUse: String,
});
export default mongoose.model("Product", ProductSchema);
