import { Route, Routes } from "react-router-dom";
import { Entrega } from "./pages/Entrega";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home/index";
import { Cart } from "./pages/Cart";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entrega" element={<Entrega />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}
