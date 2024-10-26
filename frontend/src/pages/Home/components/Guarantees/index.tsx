import { TextM } from "../../../../styles/global";
import {
  BadgesBackground,
  CartIcon,
  CoffeeIcon,
  GuaranteeInfo,
  GuaranteesContainer,
  PackageIcon,
  TimerIcon,
} from "./styles";

export function Guarantees() {
  return (
    <GuaranteesContainer>
      <GuaranteeInfo>
        <BadgesBackground $color="yellow-dark">
          <CartIcon size={12} weight="fill" />
        </BadgesBackground>
        <TextM $fontWeight="normal">Compra simples e segura</TextM>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="base-text">
          <PackageIcon size={12} weight="fill" />
        </BadgesBackground>
        <TextM $fontWeight="normal">Embalagem mantém o café intacto</TextM>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="yellow">
          <TimerIcon size={12} weight="fill" />
        </BadgesBackground>
        <TextM $fontWeight="normal">Entrega rápida e rastreada</TextM>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="purple">
          <CoffeeIcon size={12} weight="fill" />
        </BadgesBackground>
        <TextM $fontWeight="normal">O café chega fresquinho até você</TextM>
      </GuaranteeInfo>
    </GuaranteesContainer>
  );
}
