import styled from "styled-components";
import { device } from "../../styles/global";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  height: 100vh;

  @media ${device.laptop} {
  }
`;

export const Layout = styled.div`
  max-width: 74rem;
`;
