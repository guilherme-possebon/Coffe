import { ShoppingCartSimple } from "@phosphor-icons/react";
import Etradicional from "../../../../assets/cardsCoffee/ETradicional.png";
import { TextS, TitleM, TitleS } from "../../../../styles/global";
import {
  Buy,
  BuyContainer,
  CardContainer,
  CardContent,
  CartContainer,
  CoffeeImg,
  Price,
  TagContent,
} from "./styles";
import { NumberInput } from "../../../../components/NumberInput";
import { Tag } from "./components/Tag";

export function Card() {
  return (
    <>
      <CardContainer>
        <CoffeeImg src={Etradicional} alt="" />
        <CardContent>
          <TitleS>Expresso Tradicional</TitleS>
          <TagContent>
            <Tag tagLabel="Tradicional" />
            <Tag tagLabel="com leite" />
            <Tag tagLabel="gelado" />
          </TagContent>
          <TextS $fontWeight="normal">
            O tradicional café feito com água quente e grãos moídos
          </TextS>
        </CardContent>
        <BuyContainer>
          <Price>
            R$ <TitleM>9,90</TitleM>
          </Price>

          <Buy>
            <NumberInput />
            <CartContainer>
              <ShoppingCartSimple size={24} weight="fill" />
            </CartContainer>
          </Buy>
        </BuyContainer>
      </CardContainer>
    </>
  );
}
