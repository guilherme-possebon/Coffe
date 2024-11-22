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
import { PriceColor } from "../../../../../../styles/global";
import { NumberInput } from "../../../../../NumberInput";

interface CardProps {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  onRemove: (id: number) => void;
  quantityNumber: number;
  onQuantityChange: (id: number, newQuantity: number) => void;
}

export function CardHorizontal({
  imgSrc,
  title,
  price,
  onRemove,
  onQuantityChange,
  id,
  quantityNumber,
}: CardProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      console.log("remove");
      onRemove(id);
    } else {
      onQuantityChange(id, newQuantity);
      console.log("else");
    }
  };

  return (
    <HorizontalContainer>
      <ImgCoffeeCard src={imgSrc} alt={title} />
      <InfosCardContainer>
        <Infos>
          <CardTitle $fontWeight="normal">{title}</CardTitle>
          <InputsContainer>
            <NumberInput
              quantity={quantityNumber}
              setQuantity={handleQuantityChange}
            />
            <RemoveContainer type="button" onClick={() => onRemove(id)}>
              <TrashStyled />
              <p>Remover</p>
            </RemoveContainer>
          </InputsContainer>
        </Infos>
        <PriceColor $price={false}>
          R$ {(quantityNumber * price).toFixed(2)}
        </PriceColor>
      </InfosCardContainer>
    </HorizontalContainer>
  );
}
