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
};
