import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import styled from "styled-components";

interface BadgesBackgroundProps {
  $color: string;
}
export const CartIcon = styled(ShoppingCartSimple)`
  color: ${(props) => props.theme.white};
`;

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme.white};
`;

export const PackageIcon = styled(Package)`
  color: ${(props) => props.theme.white};
`;

export const CoffeeIcon = styled(Coffee)`
  color: ${(props) => props.theme.white};
`;

export const BadgesBackground = styled.div<BadgesBackgroundProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[`${props.$color}`]};
  padding: 8px;
  gap: 8px;
  border-radius: 100%;
`;

export const GuaranteesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
`;

export const GuaranteeInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;
