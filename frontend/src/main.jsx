import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Order } from "./pages/Order";
import { OrderComplete } from "./pages/OrderComplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderComplete",
    element: <OrderComplete />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  //</React.StrictMode>
);
