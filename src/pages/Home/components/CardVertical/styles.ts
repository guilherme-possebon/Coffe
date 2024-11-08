import styled from "styled-components";

export const CardContainer = styled.div`
  width: 255px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 20px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const CoffeeImg = styled.img`
  position: relative;
  top: -24px;
`;

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;
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
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const TagContent = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CartPlusIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 3px;
`;
