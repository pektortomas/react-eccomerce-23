import { useState } from "react";

export const formatPrice = (price, currency) => {
  const formmater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CZK",
  });

  return formmater.format(price).slice(4, price.length).replaceAll(",", " ") + " " + currency.toString();
};
