import styled from "styled-components";

export const CardContainer = styled.div`
  width: 255px;
`;

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buy = styled.div`
  display: flex;
  gap: 8px;
`;
