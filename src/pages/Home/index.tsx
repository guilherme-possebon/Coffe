import { useEffect, useState } from "react";
import {
  ApiResponse,
  CardsIdsType,
  fetchData,
  fetchUserCards,
} from "../../api/api";
import Swal from "sweetalert2";
import { CardVertical } from "./components/CardVertical";
import {
  HomeContainer,
  HomeContent,
  TitleContainer,
  StyledImg,
  HomeCardContent,
} from "./styles";
import Coffee from "../../assets/coffee.png";
import { TitleXl, TextL } from "../../styles/global";
import { Guarantees } from "./components/Guarantees";
import { CartDrawer } from "../../components/Header/components/CartDrawer";
import { useCart } from "../../context/cartContext";

export function Home() {
  const [data, setData] = useState<ApiResponse[] | undefined>([]);
  const [addedCards, setAddedCards] = useState<CardsIdsType[] | undefined>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { cartItemsValue } = useCart();

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
    isAddedToCart:
      addedCards &&
      addedCards.some((addedCard) => addedCard.card.id === card.id),
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

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    fetchCards();
  }, [cartItemsValue]);

  useEffect(() => {
    getCoffees();
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
            onOpenDrawer={toggleDrawer}
          />
        ))}
      </HomeCardContent>

      <CartDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
}
