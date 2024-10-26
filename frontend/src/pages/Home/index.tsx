import { Guarantees } from "./components/Guarantees";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div>
          <Guarantees />
        </div>
      </HomeContainer>
    </>
  );
}
