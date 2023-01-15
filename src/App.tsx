import { Global, ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carte from "./layout/Carte";
import Home from "./layout/Home";
import Root from "./routes/root";
import { GlobalStyles } from "./styles";
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cardapio",
        element: <Carte />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
