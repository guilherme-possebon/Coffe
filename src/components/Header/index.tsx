import {
  CartHeaderContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  InfosContainer,
  Limit,
  LocationContainer,
  NumberOfCoffees,
} from "./styles";
import Logo from "../../assets/logo.png";
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { CurrentLocation } from "./components/CurrentLocation";
import { useEffect, useRef, useState } from "react";
import { fetchUserCartItemCount } from "../../api/api";
import { useCart } from "../../context/cartContext";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<number | undefined>(0);
  const { cartItemsValue } = useCart();
  const [hasTwoChar, setHasTwoChar] = useState<boolean>(false);

  const getCartItemsQuantity = async () => {
    const result = await fetchUserCartItemCount(1);
    setCartItems(result);
  };

  useEffect(() => {
    getCartItemsQuantity();

    if (cartItems && cartItems >= 10) {
      setHasTwoChar(true);
    } else {
      setHasTwoChar(false);
    }
  }, [cartItems, cartItemsValue]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogo src={Logo} />
          <InfosContainer>
            <LocationContainer>
              <MapPin size={32} weight="fill" />
              <CurrentLocation />
            </LocationContainer>
            <div ref={cartRef}>
              <Limit to={"/cart"} $isFixed={isFixed}>
                <CartHeaderContainer>
                  <ShoppingCartSimple size={32} weight="fill" />
                  <NumberOfCoffees $hasTwoChar={hasTwoChar}>
                    {cartItems && cartItems > 0 ? cartItems : ""}
                  </NumberOfCoffees>
                </CartHeaderContainer>
              </Limit>
            </div>
          </InfosContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
