import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// product css in homepage
function Product({ product }) {
  const isDarkTheme2 = localStorage.getItem("darkTheme") === "true";
  const isDarkTheme = useSelector((store) => store.darktheme.darkTheme);
  //console.log(isDarkTheme);
  return (
    <figure className="product">
      <figcaption>{product.title}</figcaption>

      <Link to={`/productdetail?filterName=_id&filterValue=${product._id}`}>
        <img
          className={isDarkTheme || isDarkTheme2 ? "dark-image" : ""}
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </Link>
    </figure>
  );
}

export default Product;
