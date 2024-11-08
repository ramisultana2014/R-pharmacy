import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../../services/apiProduct";
import { useSearchParams } from "react-router-dom";

export function useGetAllProducts() {
  const [searchParams] = useSearchParams();

  const filterName = searchParams.get("filterName");
  const filterValue = searchParams.get("filterValue");
  //console.log(filterName, filterValue);
  const filter = !filterName ? null : { filterName, filterValue };
  const sortBy = null;
  const { isLoading, data, error } = useQuery({
    queryKey: ["allProducts", filter, sortBy],
    queryFn: () => getAllProduct({ filter, sortBy }),
  });
  //console.log("data", data);
  return { data, isLoading, error };
}
