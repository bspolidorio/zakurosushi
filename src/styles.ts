import { css } from "@emotion/react";

export const GlobalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    align-items: center;
    background: #0d0c1d;
    color: #effffa;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
`;
