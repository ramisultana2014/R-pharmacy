import styled from "styled-components";
import { useGetGeneralProducts } from "../../features/products/useGetGeneralProducts";
import MiniSpinner from "./MiniSpinner";
import Wrapper from "../assets/wrapper/GeneralProductBar";
import { Link } from "react-router-dom";
import { useState } from "react";
function GeneralProductBar() {
  const { isPending, data } = useGetGeneralProducts();
  const [showgeneralProduct, setShowGeneralProduct] = useState(null);
  if (isPending) return <MiniSpinner />;
  //console.log(data);

  if (data)
    return (
      <Wrapper>
        {data?.map((p) => (
          <li
            onMouseEnter={() => setShowGeneralProduct(p._id)}
            onMouseLeave={() => setShowGeneralProduct(null)}
            key={p._id}
          >
            <Link to={`/filter?filterName=category&filterValue=${p.category}`}>
              {p.category}
            </Link>
            {showgeneralProduct === p._id && (
              <div className="generalProduct">
                <div className="category">
                  {p.mainCategory.map((m) => (
                    <Link
                      to={`/filter?filterName=mainCategory&filterValue=${m}`}
                      key={m}
                    >
                      {m}
                    </Link>
                  ))}
                </div>
                <div className="brands-images">
                  {p.brandImages.map((img) => (
                    <img key={img} src={img} alt="brands" />
                  ))}
                </div>
                <img
                  src={p.mainImage}
                  alt="main-product"
                  className="main-image"
                />
              </div>
            )}
          </li>
        ))}
      </Wrapper>
    );
  return null;
}

export default GeneralProductBar;
// {"json":{"_id":"67051f2be1d2b9d2bc56612c","category":"Vitamins & Supplements","mainCategory":["Anti Oxidants","Bone And Joint Care","Fish Oil And Omega 3","Mens Health"],
