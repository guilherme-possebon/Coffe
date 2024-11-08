// TODO Criar api e colocar na vm da univates

import { useEffect, useState } from "react";
import { ApiResponse, fetchDataWithIds } from "../../api/api";
import { useCards } from "../../context/cardContext";
import { CardHorizontal } from "../../components/CardHorizontal";
import { CartContainer } from "./styles";

export function Cart() {
  const { cards } = useCards();
  const [data, setdata] = useState<ApiResponse[] | undefined>([]);

  const fetchCards = async () => {
    const response = await fetchDataWithIds(cards);
    setdata(response);
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
              imgSrc={info.imgSrc}
              price={info.price}
              title={info.title}
            />
          </>
        ))}
      </CartContainer>
    </>
  );
}
