import { v4 as uuidv4 } from "uuid";

export const services = {
  getProducts: async (setState) => {
    try {
      const response = await fetch("http://localhost:8080/products");
      const responseJson = await response.json();

      setState(responseJson);
    } catch (error) {
      console.error(error);
    }
  },
  sendOrder: async (customer, products) => {
    try {
      const data = {
        orderID: uuidv4(),
        customer: customer,
        products: products,
      };
      const response = await fetch("http://localhost:8080/sendOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.ok;
    } catch (error) {
      console.error(error);
    }
  },
};
