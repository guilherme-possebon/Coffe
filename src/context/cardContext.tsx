import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface CardContextInterface {
  cards: number[];
  setCards: Dispatch<SetStateAction<number[]>>;
}

const CardsContext = createContext<CardContextInterface | undefined>(undefined);

interface CardProviderInterface {
  children: React.ReactNode;
}

export function CardProvider({ children }: CardProviderInterface) {
  const [cards, setCards] = useState<number[]>([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
};
