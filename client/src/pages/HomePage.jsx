import styled from "styled-components";
import { useGetAllProducts } from "../../features/products/useGetAllProduct";
import { Carousel, MiniSpinner, Product } from "../components";
import Wrapper from "../assets/wrapper/HomePage";
function HomePage() {
  const { data, isLoading, error } = useGetAllProducts();
  if (isLoading) return <MiniSpinner />;
  //console.log(data);
  return (
    <Wrapper>
      <Carousel />
      <div className="products">
        {data.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </Wrapper>
  );
}

export default HomePage;
