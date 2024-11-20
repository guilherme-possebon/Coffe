import styled from "styled-components";
import { device } from "../../styles/global";

export const NumberInputConfig = styled.input.attrs({
  type: "number",
})`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    appearance: none !important;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield !important;
    appearance: none !important;
  }
`;

export const PlusAndMinusStyled = styled.button`
  color: ${(props) => props.theme["purple-dark"]};
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  height: 16px;
  width: 16px;

  &:hover {
    color: ${(props) => props.theme.purple};
  }
`;

export const NumberInputStyled = styled(NumberInputConfig)`
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  font-size: 12px;

  @media ${device.phone} {
    font-size: 16px;
  }

  line-height: 130%;
  font-family: "Roboto", serif;
  font-style: normal;

  width: 2ch;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const NumberInputContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 7px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};

  @media ${device.phone} {
    padding: 7px;
  }
`;
