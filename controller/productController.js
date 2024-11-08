import GeneralProduct from "../models/GeneralProduct.js";
import Product from "../models/ProductModel.js";
import { StatusCodes } from "http-status-codes"; //A library for HTTP status
export const getGeneralProduct = async (req, res) => {
  const generalProduct = await GeneralProduct.find();
  //200
  res.status(StatusCodes.OK).json({ generalProduct });
};
export const getAllProduct = async (req, res) => {
  // http://localhost:5100/api/v1/product/allproducts?category=health care&sort=price
  //console.log(req.user);
  //console.log(req.query);
  // { category: 'health care', sort: 'price' }
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  //if the url contain page= , sort= , limit= , fields= we will delete it, if we write any value inside url like category or mainCategory its not a fields.
  excludedFields.forEach((el) => delete queryObj[el]);
  const allProduct = await Product.find(queryObj);
  // .sort(req.query.sort);
  //console.log(queryObj);
  // { category: 'health care' }
  return res.status(StatusCodes.OK).json({ allProduct });
};
