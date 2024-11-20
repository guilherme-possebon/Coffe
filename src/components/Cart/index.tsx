import { useEffect, useState } from "react";
import {
  fetchCardById,
  updateUserCards,
  UserCardsResponse,
} from "../../api/api";
import { CardHorizontal } from "./components/CardHorizontal";
import {
  CardContainer,
  CartContainer,
  SelectedCoffees,
  SessionContainer,
} from "./styles";
import Swal from "sweetalert2";
import { useCart } from "../../context/cartContext";
import { TitleXs } from "../../styles/global";

export function Cart() {
  const [data, setData] = useState<UserCardsResponse[] | undefined>([]);
  const userId = 1;

  const { setCardsIds, setCartItemsValue } = useCart();

  const fetchCards = async () => {
    try {
      const response = await fetchCardById(userId);
      setData(response);

      if (JSON.stringify(response) !== undefined) {
        localStorage.setItem("cardsIds", JSON.stringify(response));
      }

      setCardsIds(response);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
    }
  };

  const handleRemove = async (id: number) => {
    try {
      await updateUserCards(userId, { cardId: id, quantity: 0 });

      setData((prev) => prev?.filter((item) => item.card.id !== id));

      setCartItemsValue((prev) => prev - 1);

      Swal.fire("Removido", "Café removido do carrinho.", "success");
    } catch (error) {
      console.error("Failed to remove card:", error);
      Swal.fire("Erro", "Falha ao remover o café.", "error");
    }
  };

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
            {data &&
              data.map((info) => (
                <CardHorizontal
                  key={info.card.id}
                  id={info.card.id}
                  imgSrc={info.card.imgSrc}
                  price={info.card.price}
                  title={info.card.title}
                  quantityNumber={info.quantity}
                  onRemove={handleRemove}
                />
              ))}
          </CardContainer>
        </SessionContainer>
      </SelectedCoffees>
    </CartContainer>
  );
}
