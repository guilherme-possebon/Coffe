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
import { ApiResponse, fetchData } from "../../api/api";

export function Home() {
  const [data, setData] = useState<ApiResponse[] | undefined>([]);

  useEffect(() => {
    getCoffees();
  }, []);

  const getCoffees = async () => {
    const response = await fetchData();
    setData(response);
  };

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
        {data?.map((card) => (
          <CardVertical
            id={card.id}
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            tags={card.tags}
            price={card.price}
          />
        ))}
      </HomeCardContent>
    </>
  );
}
