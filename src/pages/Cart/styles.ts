import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const OrderContainer = styled.div``;
export const SelectedCoffees = styled.div``;

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AddressContainer = styled.div``;

export const AddressTitle = styled.div`
  display: flex;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const TitleContainer = styled.div`
  & p:first-child {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & p:last-child {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;
