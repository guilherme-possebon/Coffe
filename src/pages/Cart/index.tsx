import { useEffect, useState } from "react";
import {
  fetchCardById,
  updateUserCards,
  UserCardsResponse,
} from "../../api/api";
import { CardHorizontal } from "../../components/CardHorizontal";
import { CartContainer } from "./styles";
import Swal from "sweetalert2";

export function Cart() {
  const [data, setData] = useState<UserCardsResponse[] | undefined>([]);
  const userId = 1; // Replace with dynamic user ID as needed

  const fetchCards = async () => {
    try {
      const response = await fetchCardById(userId);
      setData(response);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
    }
  };

  const handleRemove = async (id: number) => {
    try {
      // Remove the card by setting quantity to 0
      await updateUserCards(userId, { cardId: id, quantity: 0 });

      // Update local state
      setData((prev) => prev?.filter((item) => item.card.id !== id));

      Swal.fire("Removido", "Café removido do carrinho.", "success");
    } catch (error) {
      console.error("Failed to remove card:", error);
      Swal.fire("Erro", "Falha ao remover o café.", "error");
    }
  };

  // const handleQuantityUpdate = async (id: number, quantity: number) => {
  //   try {
  //     await updateUserCards(userId, { cardId: id, quantity });

  //     setData((prev) =>
  //       prev?.map((item) =>
  //         item.card.id === id ? { ...item, quantity } : item
  //       )
  //     );

  //     Swal.fire("Atualizado", "Quantidade atualizada com sucesso.", "success");
  //   } catch (error) {
  //     console.error("Failed to update quantity:", error);
  //     Swal.fire("Erro", "Falha ao atualizar a quantidade.", "error");
  //   }
  // };

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
