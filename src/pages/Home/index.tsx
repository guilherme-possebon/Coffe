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
import { Card } from "./components/Card";

import ETradicional from "../../assets/cardsCoffee/ETradicional.png";
import EAmericano from "../../assets/cardsCoffee/EAmericano.png";
import ECremoso from "../../assets/cardsCoffee/ECremoso.png";
import EGelado from "../../assets/cardsCoffee/EGelado.png";
import cafeCLeite from "../../assets/cardsCoffee/cafeCLeite.png";
import Latte from "../../assets/cardsCoffee/Latte.png";
import Capuccino from "../../assets/cardsCoffee/Capuccino.png";
import Macchiato from "../../assets/cardsCoffee/Macchiato.png";
import Mocaccino from "../../assets/cardsCoffee/Mocaccino.png";
import ChocolateQuente from "../../assets/cardsCoffee/ChocolateQuente.png";
import Cubano from "../../assets/cardsCoffee/Cubano.png";
import Havaiano from "../../assets/cardsCoffee/Havaiano.png";
import Arabe from "../../assets/cardsCoffee/Arabe.png";
import Irlandes from "../../assets/cardsCoffee/Irlandes.png";

type CardObject = {
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  tags: string[];
  text: string;
};

const CardsInfos: CardObject[] = [
  {
    id: 1,
    imgSrc: ETradicional,
    title: "Expresso Tradicional",
    price: 9.9,
    tags: ["Tradicional"],
    text: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: 2,
    imgSrc: EAmericano,
    title: "Expresso Americano",
    text: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: 3,
    imgSrc: ECremoso,
    title: "Expresso Cremoso",
    text: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: ["Tradicional"],
  },
  {
    id: 4,
    imgSrc: EGelado,
    title: "Expresso Gelado",
    text: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
  },
  {
    id: 5,
    imgSrc: cafeCLeite,
    title: "Café com Leite",
    text: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: 6,
    imgSrc: Latte,
    title: "Latte",
    text: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: 7,
    imgSrc: Capuccino,
    title: "Capuccino",
    text: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: 8,
    imgSrc: Macchiato,
    title: "Macchiato",
    text: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: 9,
    imgSrc: Mocaccino,
    title: "Mocaccino",
    text: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
  },
  {
    id: 10,
    imgSrc: ChocolateQuente,
    title: "Chocolate Quente",
    text: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Especial", "Com leite"],
  },
  {
    id: 11,
    imgSrc: Cubano,
    title: "Cubano",
    text: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Especial", "alcoólico", "Gelado"],
  },
  {
    id: 12,
    imgSrc: Havaiano,
    title: "Havaiano",
    text: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: 13,
    imgSrc: Arabe,
    title: "Árabe",
    text: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
  },
  {
    id: 14,
    imgSrc: Irlandes,
    title: "Irlandês",
    text: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    tags: ["Especial", "alcoólico"],
  },
];

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
        <StyledImg src={Coffee} />
      </HomeContainer>
      <HomeCardContent>
        {CardsInfos.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            title={card.title}
            text={card.text}
            tags={card.tags}
            price={card.price.toFixed(2)}
          />
        ))}
      </HomeCardContent>
    </>
  );
}
