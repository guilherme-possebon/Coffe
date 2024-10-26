import { TextL, TitleXl } from "../../../../styles/global";
import Coffe from "../../../../assets/coffe.png";
import { IntroContainer, StyledImg, TitleContainer } from "./styles";
import { Guarantees } from "../Guarantees";

export function Intro() {
  return (
    <>
      <IntroContainer>
        <div>
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
        </div>
        <StyledImg src={Coffe} />
      </IntroContainer>
    </>
  );
}
