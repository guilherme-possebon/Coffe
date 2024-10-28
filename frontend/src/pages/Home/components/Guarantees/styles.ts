import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from "@phosphor-icons/react";
import styled from "styled-components";
import { device } from "../../../../styles/global";

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
  display: flex;
  justify-content: center;
`;
export const GuaranteesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 8px;
  margin-top: 1rem;

  @media ${device.phone} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 1rem;
    margin-top: 2rem;
  }
`;

export const GuaranteeInfo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;

  & p {
    color: ${(props) => props.theme["base-text"]};
  }
`;
