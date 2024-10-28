import styled from "styled-components";
import { device } from "../../styles/global";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  padding: 0 1rem;

  @media ${device.desktop} {
    justify-content: space-around;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 800px;

  @media ${device.desktop} {
    align-items: start;
  }
`;

export const StyledImg = styled.img`
  display: none;
  @media ${device.desktop} {
    display: block;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media ${device.desktop} {
    text-align: start;
  }
`;
