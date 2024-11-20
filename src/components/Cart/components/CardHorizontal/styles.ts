import { Trash } from "@phosphor-icons/react";
import styled from "styled-components";
import { device, TextM } from "../../../../styles/global";

export const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardTitle = styled(TextM)`
  font-size: 16px;
`;

export const InfosCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RemoveContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  border: none;
  font-size: 12px;

  @media ${device.phone} {
    font-size: 16px;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;

export const TrashStyled = styled(Trash)`
  color: ${(props) => props.theme.purple};
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

export const ImgCoffeeCard = styled.img`
  width: 64px;
`;
