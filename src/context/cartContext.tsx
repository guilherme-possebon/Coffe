import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cartItemsValue: number;
  setCartItemsValue: React.Dispatch<React.SetStateAction<number>>;
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

  return (
    <CartContext.Provider value={{ cartItemsValue, setCartItemsValue }}>
      {children}
    </CartContext.Provider>
  );
};
