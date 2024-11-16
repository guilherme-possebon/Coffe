import { useState } from "react";
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
  price: number;
  onRemove: (id: number, quantity: number) => void;
  quantityNumber: number;
}

export function CardHorizontal({
  imgSrc,
  title,
  price,
  onRemove,
  id,
  quantityNumber,
}: CardProps) {
  const [quantity, setQuantity] = useState<number>(quantityNumber);

  return (
    <HorizontalContainer>
      <ImgCoffeeCard src={imgSrc} alt={title} />
      <InfosCardContainer>
        <Infos>
          <CardTitle>{title}</CardTitle>
          <InputsContainer>
            <NumberInput quantity={quantity} setQuantity={setQuantity} />
            <RemoveContainer
              type="button"
              onClick={() => onRemove(id, quantity)}
            >
              <TrashStyled />
              <p>Remover</p>
            </RemoveContainer>
          </InputsContainer>
        </Infos>
        <PriceColor $price={false}>R$ {quantity * price}</PriceColor>
      </InfosCardContainer>
    </HorizontalContainer>
  );
}
