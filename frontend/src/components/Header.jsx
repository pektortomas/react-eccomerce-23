import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
/** @jsxImportSource @emotion/react */

const Header = () => {
  const style = {
    header: css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "2rem",
    }),
  };

  const productCountInCart = useSelector((state) => state.cart.products.length);
  return (
    <div css={style.header}>
      <h1>Car Shop</h1>
      <span>Cart: {productCountInCart}</span>
    </div>
  );
};

export { Header };
