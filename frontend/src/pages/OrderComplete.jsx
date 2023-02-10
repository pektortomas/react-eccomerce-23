import { css } from "@emotion/react";
import { Link } from "react-router-dom";
/**@jsxImportSource @emotion/react */

const OrderComplete = () => {
  const style = {
    page: css({
      background: "linear-gradient(149deg, rgba(4,4,31,1) 0%, rgba(11,9,46,1) 100%);",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }),
    linkButton: css({
      background: "linear-gradient(110deg, rgba(92,83,220,1) 0%, rgba(126,69,236,1) 100%)",
      fontSize: "1rem",
      fontWeight: "400",
      padding: "1rem 3rem",
      margin: "4rem",
      border: "none",
      borderRadius: "2rem",
      cursor: "pointer",
      transition: "all ease .5s",
      "&:hover": {
        background: "#817ae8",
      },
    }),
  };

  return (
    <div css={style.page}>
      <h1>Thank you for Order!</h1>
      <Link to="/">
        <button css={style.linkButton}>Back to shop</button>
      </Link>
    </div>
  );
};

export { OrderComplete };
