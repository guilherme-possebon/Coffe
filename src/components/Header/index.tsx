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
import { fetchUserCartItemCount } from "../../api/api";
import { useCart } from "../../context/cartContext";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<number | undefined>(0);
  const { cartItemsValue } = useCart(); // Get the cart item count from context

  const getCartItemsQuantity = async () => {
    const result = await fetchUserCartItemCount(1);
    setCartItems(result);
  };

  useEffect(() => {
    getCartItemsQuantity();
  }, [cartItemsValue]);

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
              <MapPin size={24} weight="fill" />
              <CurrentLocation />
            </LocationContainer>
            <div ref={cartRef}>
              <CartHeaderContainer to={"/cart"} $isFixed={isFixed}>
                <ShoppingCartSimple size={24} weight="fill" />
                <NumberOfCoffees>
                  {cartItems != undefined && cartItems > 0 ? cartItems : ""}
                </NumberOfCoffees>
              </CartHeaderContainer>
            </div>
          </InfosContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}
