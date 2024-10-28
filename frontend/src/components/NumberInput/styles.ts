import styled from "styled-components";

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
  color: ${(props) => props.theme.purple};
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  height: 16px;
  width: 16px;
`;

export const NumberInputStyled = styled(NumberInputConfig)`
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  font-size: 16px;
  line-height: 130%;
  font-family: "Roboto", serif;
  font-style: normal;

  width: 4ch;

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
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
`;
