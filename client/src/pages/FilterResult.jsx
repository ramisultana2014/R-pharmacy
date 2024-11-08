import styled from "styled-components";
import { useGetAllProducts } from "../../features/products/useGetAllProduct";
import { MiniSpinner, Product } from "../components";
import Wrapper from "../assets/wrapper/HomePage";
function FilterResult() {
  const { data, isLoading, error } = useGetAllProducts();
  if (isLoading) return <MiniSpinner />;
  // console.log(data);
  return (
    <Wrapper>
      <div className="products">
        {data.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </Wrapper>
  );
}

export default FilterResult;
