import { ShoppingCartSimple } from "@phosphor-icons/react";
import { TextS, TitleM, TitleS } from "../../../../styles/global";
import {
  BuyContainer,
  CardContainer,
  CardContent,
  CartContainer,
  CoffeeImg,
  Price,
  TagContent,
} from "./styles";
import { Tag } from "./components/Tag";
import { useCards } from "../../../../context/cardContext";
import { useCallback } from "react";
import Swal from "sweetalert2";

interface CardProps {
  id: number;
  imgSrc: string;
  title: string;
  tags: string[];
  text: string;
  price: string;
}

export function Card({ imgSrc, title, tags, text, price, id }: CardProps) {
  const { setCards } = useCards();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleAddCard = useCallback(() => {
    setCards((prevCards) => {
      if (!prevCards.includes(id)) {
        return [...prevCards, id];
      }
      Toast.fire({
        icon: "warning",
        title: "Café já adicionado!!",
      });
      return prevCards;
    });
  }, [id, setCards, Toast]);
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

          <CartContainer type="button" onClick={handleAddCard}>
            <ShoppingCartSimple size={24} weight="fill" />
          </CartContainer>
        </BuyContainer>
      </CardContainer>
    </>
  );
}
