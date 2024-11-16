import React, { createContext, useContext, useState, ReactNode } from "react";
import { UserCardsResponse } from "../api/api";

interface CartContextType {
  cartItemsValue: number;
  setCartItemsValue: React.Dispatch<React.SetStateAction<number>>;
  cardsIds: UserCardsResponse[] | undefined;
  setCardsIds: React.Dispatch<
    React.SetStateAction<UserCardsResponse[] | undefined>
  >;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItemsValue, setCartItemsValue] = useState<number>(0);
  const [cardsIds, setCardsIds] = useState<UserCardsResponse[] | undefined>([]);

  return (
    <CartContext.Provider
      value={{ cartItemsValue, setCartItemsValue, cardsIds, setCardsIds }}
    >
      {children}
    </CartContext.Provider>
  );
};
