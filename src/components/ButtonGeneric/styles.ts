import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  & svg {
    color: ${(props) => props.theme.purple};
  }
`;
