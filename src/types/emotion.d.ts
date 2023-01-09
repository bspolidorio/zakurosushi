import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primaryDark: string;
      primaryLight: string;
      primaryHighlight: string;
    };
    breakpoints: {
      mobile: string;
    };
  }
}
