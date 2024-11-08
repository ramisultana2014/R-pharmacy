import { useDispatch, useSelector } from "react-redux";
import { useGetAllProducts } from "../../features/products/useGetAllProduct";
import { MiniSpinner } from "../components";
import Wrapper from "../assets/wrapper/ProductDetail";
import { useNavigate } from "react-router-dom";
import { addItem, deleteItem } from "../context/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
function ProductDetails() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]);

  const isDarkTheme2 = localStorage.getItem("darkTheme") === "true";
  const isDarkTheme = useSelector((store) => store.darktheme.darkTheme);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllProducts();
  if (isLoading) return <MiniSpinner />;

  //console.log(data[0].image);
  const { image, title, description, company, howToUse, price, _id } = data[0];

  return (
    <Wrapper>
      <img
        className={isDarkTheme || isDarkTheme2 ? "dark-image" : ""}
        src={image}
        alt={title}
        loading="lazy"
      />
      <div>
        <p>
          <span>Company : </span>
          {company}
        </p>
        <p>
          <span>BRAND :</span> {title}
        </p>
        <details>
          <summary>
            <span>DESCRIPTION</span>
          </summary>

          <p>{description}</p>
        </details>
        <details>
          <summary>
            <span>HOW TO USE</span>
          </summary>
          <p>{howToUse}</p>
        </details>
        <p>
          <span>PRICE :</span> {price} ED
        </p>

        <div className="btns">
          <button
            className="btn submit"
            type="submit"
            onClick={() => {
              if (user?.name === "guestUser")
                return toast.error("please sign up");
              dispatch(
                addItem({
                  itemImage: image,
                  itemTitle: title,
                  itemID: _id,
                  itemQuantity: 1,
                  itemPrice: price,
                  totalItemPrice: price * 1,
                })
              );
              navigate("/cart");
            }}
          >
            ADD TO CART
          </button>

          <button
            onClick={() => {
              dispatch(deleteItem(_id));
              navigate(-1);
            }}
            className="btn cancel"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductDetails;
