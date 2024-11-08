import { useQuery } from "@tanstack/react-query";
import { getGeneralProduct } from "../../services/apiProduct";
export function useGetGeneralProducts() {
  const { isPending, data, error } = useQuery({
    queryKey: ["generalProducts"],
    queryFn: () => getGeneralProduct(),
  });
  //console.log("data", data);
  return { data, isPending, error };
}
