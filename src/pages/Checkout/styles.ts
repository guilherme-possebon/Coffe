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

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SessionContainer = styled(BackgroundConfig)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonContainer = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  border: none;
`;

export const OrderContent = styled.div``;

export const InputContainer = styled.form``;
