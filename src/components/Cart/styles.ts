import styled from "styled-components";
import { device } from "../../styles/global";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 32px;

  padding: 8px 0 8px 8px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 400px;
  gap: 16px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #9e9e9e;
    background-clip: content-box;
  }
`;

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
