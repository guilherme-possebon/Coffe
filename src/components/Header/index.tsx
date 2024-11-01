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
import { CurrentLocation } from "./components/CurrentLocation";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogo src={Logo} />
          <InfosContainer>
            <LocationContainer>
              <MapPin size={24} weight="fill" />
              <CurrentLocation />
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
