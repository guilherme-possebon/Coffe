import {
  NumberInputContainer,
  NumberInputStyled,
  PlusAndMinusStyled,
} from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

interface NumberInputProps {
  quantity: number;
  setQuantity: (newQuantity: number) => void; // Updated type
}

export function NumberInput({ quantity, setQuantity }: NumberInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 99) {
      setQuantity(value);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <NumberInputContainer>
      <PlusAndMinusStyled type="button" onClick={handleMinus}>
        <Minus />
      </PlusAndMinusStyled>
      <NumberInputStyled
        type="number"
        value={quantity}
        onChange={handleInputChange}
        onBlur={() => {
          if (quantity > 99) {
            setQuantity(99);
          }
        }}
      />
      <PlusAndMinusStyled type="button" onClick={handlePlus}>
        <Plus />
      </PlusAndMinusStyled>
    </NumberInputContainer>
  );
}
