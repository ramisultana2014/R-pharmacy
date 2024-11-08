import mongoose from "mongoose";
const GeneralProductSchema = new mongoose.Schema({
  category: String,
  mainCategory: [String],
  brandImages: [String],
  mainImage: String,
});
export default mongoose.model("GeneralProduct", GeneralProductSchema);
