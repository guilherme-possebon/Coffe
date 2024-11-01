import styled from "styled-components";
import { device } from "../../styles/global";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

export const InfosContainer = styled.div`
  display: flex;
  gap: 12px;
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

  & span {
    display: none;
  }

  @media ${device.phone} {
    & span {
      display: block;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  & svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple"]};

    & span {
      color: ${(props) => props.theme["purple-light"]};
    }

    & svg {
      color: ${(props) => props.theme["purple-light"]};
    }
  }
`;

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["yellow-light"]};
  }
`;

export const HeaderLogo = styled.img``;
