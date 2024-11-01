import styled from "styled-components";
import { device } from "../../styles/global";

interface CartContainerProps {
  $isFixed: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfosContainer = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["purple-light"]};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & p {
    display: none;
  }

  @media ${device.phone} {
    & p {
      display: block;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  & svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple"]};

    & p {
      color: ${(props) => props.theme["purple-light"]};
    }

    & svg {
      color: ${(props) => props.theme["purple-light"]};
    }
  }
`;

export const CartContainer = styled.button<CartContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  position: ${(props) => (props.$isFixed ? "fixed" : "static")};
  top: ${(props) => (props.$isFixed ? "6px" : "auto")};
  right: ${(props) => (props.$isFixed ? "6px" : "auto")};
  z-index: 99;

  @media ${device.desktop} {
    top: ${(props) => (props.$isFixed ? "10px" : "auto")};
    right: auto;
  }

  &:hover {
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const HeaderLogo = styled.img``;
