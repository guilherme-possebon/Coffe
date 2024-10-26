import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export const MapPinStyled = styled(MapPin)`
  color: ${(props) => props.theme.purple};
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 160px;
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

export const Location = styled.div`
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CartIcon = styled(ShoppingCartSimple)`
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-night"]};
  padding: 8px;
  border-radius: 8px;
`;

export const HeaderLogo = styled.img``;
