import { PriceColor } from "../../styles/global";
import { NumberInput } from "../NumberInput";
import {
  CardTitle,
  HorizontalContainer,
  ImgCoffeeCard,
  Infos,
  InfosCardContainer,
  InputsContainer,
  RemoveContainer,
  TrashStyled,
} from "./styles";

interface CardProps {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  onRemove: (id: number) => void;
}
export function CardHorizontal({
  imgSrc,
  title,
  price,
  onRemove,
  id,
}: CardProps) {
  return (
    <>
      <HorizontalContainer>
        <ImgCoffeeCard src={imgSrc} alt="" />
        <InfosCardContainer>
          <Infos>
            <CardTitle>{title}</CardTitle>
            <InputsContainer>
              <NumberInput />
              <RemoveContainer type="button" onClick={() => onRemove(id)}>
                <TrashStyled />
                <p>Remover</p>
              </RemoveContainer>
            </InputsContainer>
          </Infos>
          <PriceColor $price={false}>R$ {price}</PriceColor>
        </InfosCardContainer>
      </HorizontalContainer>
    </>
  );
}
