import styled from "styled-components";
import { device } from "../../styles/global";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;

  @media ${device.laptop} {
    padding: 3rem;
  }
`;

export const Layout = styled.div`
  max-width: 74rem;
`;
