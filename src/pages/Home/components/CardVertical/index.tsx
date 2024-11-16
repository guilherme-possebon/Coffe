import { ShoppingCartSimple } from "@phosphor-icons/react";
import { PriceColor, TextS, TitleS } from "../../../../styles/global";
import {
  BuyContainer,
  CardContainer,
  CardContent,
  CartContainer,
  CartPlusIcon,
  CoffeeImg,
  Price,
  TagContent,
} from "./styles";
import { Tag } from "./components/Tag";
import { useState } from "react";
import Swal from "sweetalert2";
import { addUserCards, UserCardPayload } from "../../../../api/api";
import { NumberInput } from "../../../../components/NumberInput";
import { useCart } from "../../../../context/cartContext";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  imgSrc: string;
  title: string;
  tags: string[];
  text: string;
  price: string;
  isAddedToCart: boolean | undefined;
  onAddCard: (cardId: number) => void;
}

export function CardVertical({
  imgSrc,
  title,
  tags,
  text,
  price,
  id,
  isAddedToCart,
  onAddCard,
}: CardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const { setCartItemsValue } = useCart();

  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleAddCard = async () => {
    try {
      const payload: UserCardPayload = {
        userId: 1,
        cards: [
          {
            cardId: id,
            quantity: quantity,
          },
        ],
      };

      await addUserCards(payload);

      onAddCard(id);

      setCartItemsValue((prev: number) => prev + quantity);

      Toast.fire({
        icon: "success",
        title: "Café adicionado ao seu carrinho!",
      });
    } catch (error) {
      console.error("Failed to add card to cart:", error);
      Toast.fire({
        icon: "error",
        title: "Falha ao adicionar o café!",
      });
    }
  };

  return (
    <CardContainer>
      <CoffeeImg src={imgSrc} alt={title} />
      <CardContent>
        <TitleS>{title}</TitleS>
        <TagContent>
          <Tag tagLabel={tags} />
        </TagContent>
        <TextS $fontWeight="normal">{text}</TextS>
      </CardContent>
      <BuyContainer>
        <Price>
          R$ <PriceColor $price={true}>{price}</PriceColor>
        </Price>
        {isAddedToCart ? (
          <>
            <CartContainer as={Link} to={"/cart"}>
              <ShoppingCartSimple size={24} weight="fill" />
            </CartContainer>
          </>
        ) : (
          <>
            <NumberInput quantity={quantity} setQuantity={setQuantity} />
            <CartContainer type="button" onClick={handleAddCard}>
              <ShoppingCartSimple size={24} weight="fill" />
              <CartPlusIcon>+</CartPlusIcon>
            </CartContainer>
          </>
        )}
      </BuyContainer>
    </CardContainer>
  );
}
