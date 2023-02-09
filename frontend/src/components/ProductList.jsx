import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { services } from "../utils/services";
import { formatPrice } from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
/** @jsxImportSource @emotion/react */

const ProductList = () => {
  const style = {
    page: css({
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    }),
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    services.getProducts(setProducts);
  }, []);

  return (
    <div css={style.page}>
      {products.length > 0 ? (
        products.map((product) => <ProductItem key={product.product_id} productData={product} />)
      ) : (
        <p>Error in connection to database</p>
      )}
    </div>
  );
};

const ProductItem = (props) => {
  const style = {
    productContainer: css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba( 255, 255, 255, 0.2)",
      //   boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 4.5px )",
      borderRadius: "2rem",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
      width: "15rem",
      height: "18rem",
      margin: "2rem",
    }),
    productCategory: css({
      color: "#c4c2db",
      textTransform: "uppercase",
      fontSize: ".8rem",
      fontWeight: "bold",
      letterSpacing: ".2rem",
    }),
    productName: css({
      fontSize: "1.6rem",
      fontWeight: "normal",
      margin: "1rem",
    }),
    productPrice: css({
      color: "#caa5ff",
      fontSize: "1.2rem",
      fontWeight: "normal",
      margin: "1rem",
    }),
    productButton: css({
      background: "linear-gradient(110deg, rgba(92,83,220,1) 0%, rgba(126,69,236,1) 100%)",
      fontSize: "1rem",
      fontWeight: "400",
      margin: "1rem",
      padding: "1rem 1.8rem",
      border: "none",
      borderRadius: "2rem",
      cursor: "pointer",
      transition: "all ease .5s",
      "&:hover": {
        background: "#817ae8",
      },
    }),
  };
  const { product_name, product_price, product_category, product_description, product_description_short } =
    props.productData;
  const formatedPrice = formatPrice(product_price, "Kč");

  const dispatch = useDispatch();

  return (
    <div css={style.productContainer}>
      <span css={style.productCategory}>{product_category}</span>
      <span css={style.productName}>{product_name}</span>
      <span css={style.productPrice}>{formatedPrice}</span>
      <button onClick={() => dispatch(addToCart(props.productData))} css={style.productButton}>
        Add To Cart
      </button>
    </div>
  );
};

export { ProductList };
