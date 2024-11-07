// TODO Criar api e colocar na vm da univates

import { useCards } from "../../context/cardContext";

export function Cart() {
  const { cards } = useCards();
  return (
    <>
      <div>{cards}</div>
    </>
  );
}
