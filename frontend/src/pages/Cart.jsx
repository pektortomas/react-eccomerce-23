import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils/helperFunctions";
import { removeAllCart, removeFromCart } from "../slices/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
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
    linkButton: css({
      background: "linear-gradient(110deg, rgba(92,83,220,1) 0%, rgba(126,69,236,1) 100%)",
      fontSize: "1rem",
      fontWeight: "400",
      padding: "1rem 3rem",
      margin: "1rem",
      border: "none",
      borderRadius: "2rem",
      cursor: "pointer",
      transition: "all ease .5s",
      "&:hover": {
        background: "#817ae8",
      },
    }),
    row: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      padding: "0 2rem",
    }),
    productList: css({
      margin: "3rem 0",
    }),
  };

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div css={style.page}>
      <div css={style.row}>
        <h1>Cart</h1>
        <Link to="/">
          <button css={style.linkButton}>Back to shop</button>
        </Link>
      </div>
      <div css={style.productList}>
        {cart.products.map((element) => (
          <div key={uuidv4()} css={style.productRow}>
            <h2>{element.product_name}</h2>
            <p>{formatPrice(element.product_price, "Kč")}</p>
            <button onClick={() => dispatch(removeFromCart(element))} css={style.removeButton}>
              X
            </button>
          </div>
        ))}
      </div>
      {cart.products.length > 0 ? (
        <div css={style.row}>
          <h2>Total: {formatPrice(cart.value, "Kč")}</h2>
          <button css={style.linkButton} onClick={() => dispatch(removeAllCart())}>
            Remove All
          </button>
          <Link to="/order">
            <button css={style.linkButton}>Continue to order</button>
          </Link>
        </div>
      ) : (
        <h3>Please add some product to Cart first</h3>
      )}
    </div>
  );
};

export { Cart };
