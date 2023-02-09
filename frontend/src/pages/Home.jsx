import React from "react";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export { Home };
