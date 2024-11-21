import styled from "styled-components";

interface InputProps {
  $color: "default" | "paymentColor";
  $isChecked: boolean;
}

export const RadioInputContainer = styled.div<InputProps>`
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  background-color: ${(props) =>
    props.$isChecked ? props.theme["base-hover"] : props.theme["base-button"]};

  color: ${(props) =>
    props.$color == "paymentColor"
      ? props.theme.white
      : props.$color == "default"
      ? props.theme["base-text"]
      : ""};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.$color == "paymentColor"
        ? props.theme["yellow-dark"]
        : props.theme["base-hover"]};
  }

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    cursor: pointer;

    & svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;

export const InputRadioStyled = styled.input`
  display: none;
`;
