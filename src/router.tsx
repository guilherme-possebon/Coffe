import { Route, Routes } from "react-router-dom";
import { Entrega } from "./pages/Entrega";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home/index";

import { LayoutWithOutHeader } from "./layout/LayoutWithOutHeader";
import { Cart } from "./components/Header/components/Cart";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entrega" element={<Entrega />} />
        </Route>
        <Route path="/cart" element={<LayoutWithOutHeader />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}
