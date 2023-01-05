import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primaryDark: string;
      primaryLight: string;
      primaryHover: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}
