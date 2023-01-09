import { css } from "@emotion/react";

export const GlobalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
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
    font-family: "Philosopher", sans-serif;
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
`;
