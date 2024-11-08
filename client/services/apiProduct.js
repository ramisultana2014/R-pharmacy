import axios from "axios";
import { BiCategory } from "react-icons/bi";

export async function getGeneralProduct() {
  const res = await axios.get(`/api/v1/product/generalProducts`);
  //console.log("api", res.data.generalProduct);
  return res.data.generalProduct;
}
export async function getAllProduct({ filter, sortBy }) {
  try {
    let query = "?";
    // filter.field= category filter.value= health care
    if (filter) {
      query = `${query}${filter.filterName}=${filter.filterValue}`;
    }
    if (sortBy && !filter) {
      query = `${query}${sortBy.field}=${sortBy.value}`;
    }
    if (sortBy && filter) {
      query = `${query}&${sortBy.field}=${sortBy.value}`;
    }
    const res = await axios.get(`/api/v1/product/allproducts${query}`);
    //console.log("res", res);
    return res.data.allProduct;
  } catch (error) {
    //console.log(error);
    throw new Error("something went wrong");
  }
}
// export async function getAllProduct() {
//   // http://localhost:5100/api/v1/product/allproducts?category=health care&sort=price
//   let query = "?";
//   const res = await axios.get(`/api/v1/product/allproducts${query}`);
//   console.log("res", res);
//   return res;
// }
