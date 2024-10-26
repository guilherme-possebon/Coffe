import {
  CartContainer,
  CartIcon,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  InfosContainer,
  Location,
  MapPinStyled,
} from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogo src={Logo} />
          <InfosContainer>
            <Location>
              <MapPinStyled size={24} weight="fill" />
              <span>Porto Alegre, RS</span>
            </Location>
            <CartContainer>
              <CartIcon size={24} weight="fill" />
            </CartContainer>
          </InfosContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
