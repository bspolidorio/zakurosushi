import { Global, ThemeProvider } from "@emotion/react";
import Home from "./Layout/Home";
import { GlobalStyles } from "./styles";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
