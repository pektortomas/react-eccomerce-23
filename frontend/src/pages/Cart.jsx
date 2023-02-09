import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/helperFunctions";
import { removeFromCart } from "../slices/cartSlice";
/** @jsxImportSource @emotion/react */

const Cart = () => {
  const style = {
    page: css({
      background: "linear-gradient(149deg, rgba(4,4,31,1) 0%, rgba(11,9,46,1) 100%);",
      minHeight: "100vh",
    }),
    productRow: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10rem",
      borderBottom: "1px solid white",
    }),
    removeButton: css({
      background: "linear-gradient(110deg, rgba(92,83,220,1) 0%, rgba(126,69,236,1) 100%)",
      fontSize: "1rem",
      width: "2.5rem",
      height: "2.5rem",
      fontWeight: "400",
      margin: "1rem",
      border: "none",
      borderRadius: "2rem",
      cursor: "pointer",
      transition: "all ease .5s",
      "&:hover": {
        background: "#817ae8",
      },
    }),
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div css={style.page}>
      <h1>Cart</h1>
      <h2>Total: {formatPrice(cart.value, "Kč")}</h2>
      <div>
        {cart.products.map((element) => (
          <div key={element.product_id} css={style.productRow}>
            <h2>{element.product_name}</h2>
            <p>{formatPrice(element.product_price, "Kč")}</p>
            <button onClick={() => dispatch(removeFromCart(element))} css={style.removeButton}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Cart };
