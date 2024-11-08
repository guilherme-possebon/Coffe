import {
  CartHeaderContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  InfosContainer,
  LocationContainer,
  NumberOfCoffees,
} from "./styles";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { CurrentLocation } from "./components/CurrentLocation";
import { useEffect, useRef, useState } from "react";
import { useCards } from "../../context/cardContext";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is intersecting:", entry.isIntersecting);
        if (!entry.isIntersecting && !isFixed) {
          setIsFixed(true);
        } else if (entry.isIntersecting && isFixed) {
          setIsFixed(false);
        }
      },
      { root: null, threshold: 0.1 }
    );

    const currentCartRef = cartRef.current;

    if (currentCartRef) {
      observer.observe(currentCartRef);
    }

    return () => {
      if (currentCartRef) {
        observer.unobserve(currentCartRef);
      }
    };
  }, [isFixed]);

  const { cards } = useCards();

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
            <div ref={cartRef}>
              <CartHeaderContainer to={"/cart"} $isFixed={isFixed}>
                <ShoppingCartSimple size={24} weight="fill" />
                <NumberOfCoffees>
                  {cards.length > 0 ? cards.length : ""}
                </NumberOfCoffees>
              </CartHeaderContainer>
            </div>
          </InfosContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
