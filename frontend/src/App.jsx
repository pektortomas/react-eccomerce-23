import { Home } from "./pages/Home";
import { css } from "@emotion/react";

/** @jsxImportSource @emotion/react */

const style = {
  page: css({
    background: "linear-gradient(149deg, rgba(4,4,31,1) 0%, rgba(11,9,46,1) 100%);",
    minHeight: "100vh",
  }),
};

function App() {
  return (
    <div css={style.page}>
      <Home />
    </div>
  );
}

export default App;
