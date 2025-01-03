import styled from "styled-components";
import { device } from "../../styles/global";

interface CartContainerProps {
  $isFixed: boolean;
}

interface NumberOfCoffeesProps {
  $hasTwoChar: boolean;
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

export const CartHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const NumberOfCoffees = styled.div<NumberOfCoffeesProps>`
  position: absolute;
  top: 14px;
  left: 2px;

  color: ${(props) => props.theme["yellow-light"]};
  border-radius: 50%;
  width: 48px;
  height: 48px;

  z-index: 100;

  &:hover {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Limit = styled.button<CartContainerProps>`
  position: ${(props) => (props.$isFixed ? "fixed" : "static")};
  top: ${(props) => (props.$isFixed ? "6px" : "auto")};
  right: ${(props) => (props.$isFixed ? "6px" : "auto")};
  z-index: 99;
  border: none;
  background-color: transparent;

  @media ${device.desktop} {
    top: ${(props) => (props.$isFixed ? "10px" : "auto")};
    right: auto;
  }
`;

export const HeaderLogo = styled.img``;
