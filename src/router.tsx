import { Route, Routes } from "react-router-dom";
import { Entrega } from "./pages/Entrega";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Home } from "./pages/Home/index";

import { LayoutWithOutHeader } from "./layout/LayoutWithOutHeader";
import { Checkout } from "./pages/Checkout";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/entrega" element={<Entrega />} />
        </Route>
        <Route path="/checkout" element={<LayoutWithOutHeader />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}
