import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import styled from "styled-components";

const BackgroundConfig = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 6px;
`;

export const OrderTitleContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  & p:first-child {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & p:last-child {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Inputs = styled.div`
  display: flex;
`;

export const StyledMapPin = styled(MapPinLine)`
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const StyledDollar = styled(CurrencyDollar)`
  color: ${(props) => props.theme.purple};
`;

export const PaymentContainer = styled(BackgroundConfig)``;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const InputContainer = styled.div``;
export const OrderContent = styled.div``;
