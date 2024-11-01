import { ShoppingCartSimple } from "@phosphor-icons/react";
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

interface CardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  text: string;
  price: string;
}

export function Card({ imgSrc, title, tags, text, price }: CardProps) {
  return (
    <>
      <CardContainer>
        <CoffeeImg src={imgSrc} alt="" />
        <CardContent>
          <TitleS>{title}</TitleS>
          <TagContent>
            <Tag tagLabel={tags} />
          </TagContent>
          <TextS $fontWeight="normal">{text}</TextS>
        </CardContent>
        <BuyContainer>
          <Price>
            R$ <TitleM>{price}</TitleM>
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
