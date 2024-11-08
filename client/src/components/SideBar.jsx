import styled from "styled-components";
import Wrapper from "../assets/wrapper/SideBar";
import { useGetGeneralProducts } from "../../features/products/useGetGeneralProducts";
import MiniSpinner from "./MiniSpinner";
import { Link } from "react-router-dom";
function SideBar() {
  const { isPending, data } = useGetGeneralProducts();

  if (isPending) return <MiniSpinner />;
  //console.log(data);
  if (data)
    return (
      <Wrapper>
        {data?.map((product) => (
          <details key={product._id}>
            <summary>
              <Link
                to={`/filter?filterName=category&filterValue=${product.category}`}
              >
                {product.category}
              </Link>
            </summary>
            {product?.mainCategory?.map((m) => (
              <Link
                key={m}
                to={`/filter?filterName=mainCategory&filterValue=${m}`}
              >
                {m}
              </Link>
            ))}
          </details>
        ))}
      </Wrapper>
    );
  return null;
}

export default SideBar;
