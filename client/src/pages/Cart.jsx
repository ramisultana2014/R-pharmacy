import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrapper/Cart";
import PageNotFound from "./PageNotFound";
import { decreasQuantity, increasquantity } from "../context/cartSlice";

function Cart() {
  const isDarkTheme2 = localStorage.getItem("darkTheme") === "true";
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((store) => store.darktheme.darkTheme);
  const cart = useSelector((store) => store.cart.cart);
  //console.log(cart);
  if (cart?.length > 0)
    return (
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th> image</th>
              <th> price</th>
              <th> quantity</th>
              <th> total price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.itemID}>
                <td>
                  <img
                    className={isDarkTheme || isDarkTheme2 ? "dark-image" : ""}
                    src={item.itemImage}
                    alt={item.itemTitle}
                  />
                </td>
                <td>{item.itemPrice}</td>
                <td>
                  <button
                    onClick={() => dispatch(decreasQuantity(item.itemID))}
                  >
                    -
                  </button>

                  {item.itemQuantity}
                  <button
                    onClick={() => dispatch(increasquantity(item.itemID))}
                  >
                    +
                  </button>
                </td>
                <td>{item.totalItemPrice}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Order Price</td>
              <td className="no-border"></td>
              <td className="no-border"></td>

              <td className="no-border-left">
                {cart.reduce((acc, item) => acc + item.totalItemPrice, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </Wrapper>
    );
  return <PageNotFound errorMessagecart="Nothing In Your Cary" />;
}

export default Cart;

// .item-controlle {
//     display: grid;
//     grid-template-columns: repeat(3, 10rem);
//     //align-items: center;
//     //justify-content: space-around;
//     transition: all 1s;
//     background-color: var(--color-brand-main-2);
//     border-radius: 50px;
//     border: 2px solid var(--color-grey-0);
//     box-shadow: 0 0 0 3px white;
//     padding: 8px 20px;
//     color: var(--color-grey-900);
//   }
//   .item-controlle:hover {
//     background-color: var(--color-brand-main-3);
//   }
//   .item-controlle button {
//     background: none;
//     border: none;
//   }

// {currentItem ? (
//     <div className="item-controlle">
//       <button>-</button>
//       <button>
//         continue to cart Quantity:{currentItem?.itemQuantity}
//         Price: {currentItem?.totalItemPrice}
//       </button>
//       <button>+</button>
//     </div>
//   ) : (
