import { ShoppingCartSimple } from "@phosphor-icons/react";
import Etradicional from "../../../../assets/cardsCoffee/ETradicional.png";
import { TextS, TitleS } from "../../../../styles/global";
import { Buy, BuyContainer, CardContainer, CartContainer } from "./styles";
import { NumberInput } from "../../../../components/NumberInput";

export function Card() {
  return (
    <>
      <CardContainer>
        <img src={Etradicional} alt="" />
        <TitleS>Expresso Tradicional</TitleS>
        <TextS $fontWeight="normal">
          O tradicional café feito com água quente e grãos moídos
        </TextS>
        <BuyContainer>
          <p>R$ 9,90</p>

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
