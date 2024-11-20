import { Outlet } from "react-router-dom";
import { Layout, LayoutContainer } from "./styles";

export function LayoutWithOutHeader() {
  return (
    <>
      <LayoutContainer>
        <Layout>
          <Outlet />
        </Layout>
      </LayoutContainer>
    </>
  );
}
