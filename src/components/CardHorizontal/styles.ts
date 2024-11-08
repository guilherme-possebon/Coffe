import { Trash } from "@phosphor-icons/react";
import styled from "styled-components";
import { TitleM } from "../../styles/global";

export const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 360px;
`;

export const CardTitle = styled(TitleM)`
  font-size: 16px;
`;

export const InfosCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

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
`;

export const ImgCoffeeCard = styled.img`
  width: 64px;
`;
