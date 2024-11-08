import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
import GeneralProduct from "./models/GeneralProduct.js";
import Product from "./models/ProductModel.js";
dotenv.config();
try {
  await mongoose.connect(process.env.DATABASE);
  const jsonGeneralProducts = JSON.parse(
    await readFile(
      new URL("./utils/General_Product_data.json", import.meta.url)
    )
  );
  const jsonProducts = JSON.parse(
    await readFile(new URL("./utils/Product_Data.json", import.meta.url))
  );
  await Product.deleteMany();
  await GeneralProduct.deleteMany();
  await GeneralProduct.create(jsonGeneralProducts);
  await Product.create(jsonProducts);
  console.log("we did it !!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
