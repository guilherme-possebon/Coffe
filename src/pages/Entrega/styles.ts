import { styled } from "styled-components";

export const ContainerSide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;

export const CheckoutCointainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`;

export const DevilveryContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
`;

export const TitleCart = styled.span`
  font-size: 2rem;
  font-weight: 900;
  font-family: "Baloo 2", sans-serif;
  color: ${(props) => props.theme["yellow-dark"]};
  line-height: 130%;
`;
export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  position: relative;
  gap: 1rem;
  border-radius: 6px 36px;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border: 1px solid transparent;
    border-radius: 6px 36px;
    border-radius: inherit;
    background: linear-gradient(
        45deg,
        ${(props) => props.theme["yellow-dark"]},
        ${(props) => props.theme["purple-dark"]}
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconContainer = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme[props.$color]};
  border-radius: 50%;
`;

export const TextAdress = styled.span`
  text-transform: capitalize;
`;
