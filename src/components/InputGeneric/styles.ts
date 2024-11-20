import styled from "styled-components";

interface InputStyledInterface {
  $width: string;
  $mHorizontal: boolean;
}

export const InputContainer = styled.div<InputStyledInterface>`
  position: relative;
  width: ${(props) =>
    props.$width === "full"
      ? "100%"
      : props.$width === "half"
      ? "50%"
      : props.$width === "small"
      ? "60px"
      : "100%"};
  margin-right: ${(props) => (props.$mHorizontal ? "12px" : "0")};
  margin-bottom: 24px;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    text-align: right;
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme["primary"]};
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 14px;
  color: ${(props) => props.theme["base-label"]};
  pointer-events: none;
  transition: all 0.2s ease;
  display: flex;
  justify-content: space-between;

  ${InputStyled}:placeholder-shown + & {
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
  }

  ${InputStyled}:not(:placeholder-shown) + &,
  ${InputStyled}:focus + & {
    top: -20px;
    left: 0;
    font-size: 16px;
    color: ${(props) => props.theme["primary"]};
  }
`;
