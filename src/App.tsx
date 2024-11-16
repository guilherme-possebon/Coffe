import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/theme/DefaultTheme";
import { GlobalStyle } from "./styles/global";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
