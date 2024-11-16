import { TextL, TitleXl } from "../../styles/global";
import { Guarantees } from "./components/Guarantees";
import {
  HomeCardContent,
  HomeContainer,
  HomeContent,
  StyledImg,
  TitleContainer,
} from "./styles";
import Coffee from "../../assets/coffee.png";
import { CardVertical } from "./components/CardVertical";
import { useEffect, useState } from "react";
import {
  ApiResponse,
  CardsIdsType,
  fetchData,
  fetchUserCards,
} from "../../api/api";
import Swal from "sweetalert2";

export function Home() {
  const [data, setData] = useState<ApiResponse[] | undefined>([]);
  const [addedCards, setAddedCards] = useState<CardsIdsType[] | undefined>([]);

  const fetchCards = async () => {
    try {
      const response = await fetchUserCards(1);
      setAddedCards(response);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      Swal.fire("Erro", "Falha ao carregar o carrinho.", "error");
    }
  };

  const mergedData = data?.map((card) => ({
    ...card,
    isAddedToCart: addedCards?.some(
      (addedCard) => addedCard.card.id === card.id
    ),
  }));

  const getCoffees = async () => {
    const response = await fetchData();
    setData(response);
  };

  const handleAddCard = (cardId: number) => {
    setAddedCards((prev = []) => [
      ...prev,
      { id: prev.length + 1, card: { id: cardId }, quantity: 1 },
    ]);
  };

  useEffect(() => {
    getCoffees();
    fetchCards();
  }, []);

  return (
    <>
      <HomeContainer>
        <HomeContent>
          <TitleContainer>
            <TitleXl>
              Encontre o café perfeito para qualquer hora do dia
            </TitleXl>
            <TextL $fontWeight="normal">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </TextL>
          </TitleContainer>
          <Guarantees />
        </HomeContent>
        <StyledImg src={Coffee} />
      </HomeContainer>
      <HomeCardContent>
        {mergedData?.map((card) => (
          <CardVertical
            id={card.id}
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            tags={card.tags}
            price={card.price}
            isAddedToCart={card.isAddedToCart}
            onAddCard={handleAddCard}
          />
        ))}
      </HomeCardContent>
    </>
  );
}
