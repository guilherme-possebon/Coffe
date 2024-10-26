import { TextL, TitleXl } from "../../styles/global";
import { Guarantees } from "./components/Guarantees";
import {
  HomeContainer,
  HomeContent,
  StyledImg,
  TitleContainer,
} from "./styles";
import Coffe from "../../assets/coffe.png";

export function Home() {
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
        <StyledImg src={Coffe} />
      </HomeContainer>
    </>
  );
}
