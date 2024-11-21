import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCart } from "../../../../context/cartContext";
import {
  fetchCardById,
  updateUserCards,
  UserCardsResponse,
} from "../../../../api/api";
import { CardHorizontal } from "./components/CardHorizontal";
import {
  CardContainer,
  CartContainer,
  Devider,
  PaymentContainer,
  PaymentInfos,
  SelectedCoffees,
  SessionContainer,
} from "./styles";
import { TextL, TextS, TitleXs } from "../../../../styles/global";

export function Cart() {
  const [data, setData] = useState<UserCardsResponse[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const userId = 1;

  const { setCardsIds, setCartItemsValue } = useCart();

  // Fetch cards from API
  const fetchCards = async () => {
    try {
      const response = await fetchCardById(userId);

      if (response) {
        setData(response);
        localStorage.setItem("cardsIds", JSON.stringify(response));
        setCardsIds(response);
      }
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await updateUserCards(userId, { cardId: id, quantity: 0 });

      setData((prev) => prev.filter((item) => item.card.id !== id));
      setCartItemsValue((prev) => Math.max(prev - 1, 0));

      Swal.fire("Removido", "Café removido do carrinho.", "success");
    } catch (error) {
      console.error("Failed to remove card:", error);
      Swal.fire("Erro", "Falha ao remover o café.", "error");
    }
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.card.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  useEffect(() => {
    const total = data.reduce(
      (acc, item) => acc + item.card.price * item.quantity,
      0
    );
    setTotalValue(total);
  }, [data]);

  useEffect(() => {
    fetchCards();

    const storedCardsIds = localStorage.getItem("cardsIds");
    if (storedCardsIds) {
      setCardsIds(JSON.parse(storedCardsIds));
    }
  }, []);

  return (
    <CartContainer>
      <SelectedCoffees>
        <TitleXs>Conteúdo do carrinho</TitleXs>
        <SessionContainer>
          <CardContainer>
            {data.map((info) => (
              <div key={info.card.id}>
                <CardHorizontal
                  id={info.card.id}
                  imgSrc={info.card.imgSrc}
                  price={info.card.price}
                  title={info.card.title}
                  quantityNumber={info.quantity}
                  onRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                />
                <Devider />
              </div>
            ))}
          </CardContainer>
          <PaymentContainer>
            <PaymentInfos>
              <TextS $fontWeight="normal">Total em itens</TextS>
              <TextS $fontWeight="normal">R$ {totalValue.toFixed(2)}</TextS>
            </PaymentInfos>
            <PaymentInfos>
              <TextS $fontWeight="normal">Entrega</TextS>
              <TextS $fontWeight="normal">R$ 3,50</TextS>
            </PaymentInfos>
            <PaymentInfos>
              <TextL $fontWeight="bold">Total</TextL>
              <TextL $fontWeight="bold">
                R$ {(totalValue + 3.5).toFixed(2)}
              </TextL>
            </PaymentInfos>
          </PaymentContainer>
        </SessionContainer>
      </SelectedCoffees>
    </CartContainer>
  );
}
