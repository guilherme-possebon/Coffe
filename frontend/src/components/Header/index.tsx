import {
  CartContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  InfosContainer,
  LocationContainer,
} from "./styles";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogo src={Logo} />
          <InfosContainer>
            <LocationContainer>
              <MapPin size={24} weight="fill" />
              <span>Porto Alegre, RS</span>
            </LocationContainer>
            <CartContainer>
              <ShoppingCartSimple size={24} weight="fill" />
            </CartContainer>
          </InfosContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
