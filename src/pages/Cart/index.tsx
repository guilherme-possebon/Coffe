// TODO Criar api e colocar na vm da univates

import { useEffect, useState } from "react";
import { ApiResponse, fetchDataWithIds } from "../../api/api";
import { useCards } from "../../context/cardContext";
import { CardHorizontal } from "../../components/CardHorizontal";
import { CartContainer } from "./styles";

export function Cart() {
  const { cards } = useCards();
  const [data, setData] = useState<ApiResponse[] | undefined>([]);

  const fetchCards = async () => {
    const response = await fetchDataWithIds(cards);
    setData(response);
  };

  const handleRemove = async (id: number) => {
    console.log("🚀 ~ handleRemove ~ id:", id);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <CartContainer>
        {data?.map((info) => (
          <>
            <CardHorizontal
              key={info.id}
              id={info.id}
              imgSrc={info.imgSrc}
              price={info.price}
              title={info.title}
              onRemove={handleRemove}
            />
          </>
        ))}
      </CartContainer>
    </>
  );
}
