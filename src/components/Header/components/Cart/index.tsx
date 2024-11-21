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
import {
  ButtonGeneric,
  TextL,
  TextS,
  TitleXs,
} from "../../../../styles/global";
import { Link } from "react-router-dom";

export function Cart() {
  const [data, setData] = useState<UserCardsResponse[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const userId = 1;

  const { setCardsIds, setCartItemsValue } = useCart();

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
        {data.length == 0 ? (
          <>Tente adicionar conteudo no carrinho!</>
        ) : (
          <>
            <TitleXs>Conteúdo do carrinho</TitleXs>
            <SessionContainer>
              <CardContainer>
                {data.map((info) => (
                  <>
                    <CardHorizontal
                      id={info.card.id}
                      imgSrc={info.card.imgSrc}
                      price={info.card.price}
                      title={info.card.title}
                      quantityNumber={info.quantity}
                      onRemove={handleRemove}
                      onQuantityChange={handleQuantityChange}
                    />
                    <Devider key={info.id} />
                  </>
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
                <ButtonGeneric as={Link} to={"/checkout"} $color="paymentColor">
                  Confirmar pedido
                </ButtonGeneric>
              </PaymentContainer>
            </SessionContainer>
          </>
        )}
      </SelectedCoffees>
    </CartContainer>
  );
}
