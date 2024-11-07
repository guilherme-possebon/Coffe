import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/theme/DefaultTheme";
import { GlobalStyle } from "./styles/global";
import { CardProvider } from "./context/cardContext";

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <CardProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CardProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
