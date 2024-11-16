import { useEffect, useState } from "react";
import {
  fetchCardById,
  updateUserCards,
  UserCardsResponse,
} from "../../api/api";
import { CardHorizontal } from "../../components/CardHorizontal";
import { CartContainer } from "./styles";
import Swal from "sweetalert2";
import { useCart } from "../../context/cartContext";

export function Cart() {
  const [data, setData] = useState<UserCardsResponse[] | undefined>([]);
  const userId = 1;

  const { setCartItemsValue } = useCart();

  const fetchCards = async () => {
    try {
      const response = await fetchCardById(userId);

      setData(response);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
    }
  };

  const handleRemove = async (id: number, quantity: number) => {
    try {
      await updateUserCards(userId, { cardId: id, quantity: 0 });

      setData((prev) => prev?.filter((item) => item.card.id !== id));

      setCartItemsValue((prev: number) => prev - quantity);

      Swal.fire("Removido", "Café removido do carrinho.", "success");
    } catch (error) {
      console.error("Failed to remove card:", error);
      Swal.fire("Erro", "Falha ao remover o café.", "error");
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <CartContainer>
      {data?.map((info) => (
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
    </CartContainer>
  );
}
