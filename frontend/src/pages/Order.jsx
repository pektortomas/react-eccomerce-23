import { css } from "@emotion/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../utils/services";
import { removeAllCart } from "../slices/cartSlice";
/**@jsxImportSource @emotion/react */

const Order = () => {
  const style = {
    page: css({
      background: "linear-gradient(149deg, rgba(4,4,31,1) 0%, rgba(11,9,46,1) 100%);",
      minHeight: "100vh",
    }),
    linkButton: css({
      background: "linear-gradient(110deg, rgba(92,83,220,1) 0%, rgba(126,69,236,1) 100%)",
      width: "10rem",
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
    form: css({
      background: "#191675",
      fontSize: "1.1rem",
      fontWeight: "400",
      padding: "3rem",
      margin: "1rem",
      border: "none",
      borderRadius: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      input: {
        width: "20rem",
        height: "2.3rem",
        margin: ".7rem 0",
        borderRadius: "2rem",
        outline: "none",
        border: "none",
        textAlign: "center",
        color: "black",
        fontSize: "1.1rem",
      },
    }),
  };

  const [customerData, setCustomerData] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });
  const [formTwoValues, setFormTwoValues] = useState({
    street: "",
    city: "",
    zip: "",
  });

  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div css={style.page}>
      <Link to={"/cart"}>
        <button css={style.linkButton}>Back</button>
      </Link>
      {customerData.name ? (
        <form css={style.form}>
          <div>
            <label htmlFor="street">Streeet</label>
            <br />
            <input
              type="text"
              name="street"
              required
              value={formTwoValues.street}
              onChange={(e) => setFormTwoValues((prev) => ({ ...prev, street: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <br />
            <input
              type="text"
              name="city"
              required
              value={formTwoValues.city}
              onChange={(e) => setFormTwoValues((prev) => ({ ...prev, city: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <br />
            <input
              type="text"
              name="zip"
              required
              value={formTwoValues.zip}
              onChange={(e) => setFormTwoValues((prev) => ({ ...prev, zip: e.target.value }))}
            />
          </div>
          <button
            css={style.linkButton}
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              setCustomerData((prev) => ({
                ...prev,
                street: formTwoValues.street,
                city: formTwoValues.city,
                zip: formTwoValues.zip,
              }));
              setFormTwoValues({ street: "", city: "", zip: "" });
              services.sendOrder(customerData, cartProducts);
              dispatch(removeAllCart());
              navigate("/");
            }}
          >
            Order
          </button>
        </form>
      ) : (
        <form css={style.form}>
          <div>
            <label htmlFor="name">Name and Surename</label>
            <br />
            <input
              type="text"
              name="name"
              required
              value={formValues.name}
              onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              required
              value={formValues.email}
              onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <button
            css={style.linkButton}
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              setCustomerData(formValues);
              setFormValues({ name: "", email: "" });
            }}
          >
            Continue
          </button>
        </form>
      )}
    </div>
  );
};

export { Order };
