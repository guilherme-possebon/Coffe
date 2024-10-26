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
        <p>Compra simples e segura</p>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="yellow">
          <TimerIcon size={12} weight="fill" />
        </BadgesBackground>
        <p>Entrega rápida e rastreada</p>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="base-text">
          <PackageIcon size={12} weight="fill" />
        </BadgesBackground>
        <p>Embalagem mantém o café intacto</p>
      </GuaranteeInfo>
      <GuaranteeInfo>
        <BadgesBackground $color="purple">
          <CoffeeIcon size={12} weight="fill" />
        </BadgesBackground>
        <p>O café chega fresquinho até você</p>
      </GuaranteeInfo>
    </GuaranteesContainer>
  );
}
