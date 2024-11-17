import styled from "styled-components";

interface InputStyledInterface {
  $width: string;
}

export const InputStyled = styled.input<InputStyledInterface>`
  width: ${(props) =>
    props.$width == "full"
      ? "100%"
      : props.$width == "half"
      ? "200px"
      : props.$width == "small"
      ? "60px"
      : ""};
  padding: 12px;
  border: ${(props) => props.theme["base-button"]};
  background-color: ${(props) => props.theme["base-input"]}; ;
`;
