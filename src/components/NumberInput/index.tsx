import { useState } from "react";
import {
  NumberInputContainer,
  NumberInputStyled,
  PlusAndMinusStyled,
} from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export function NumberInput() {
  const [inputValue, setInputValue] = useState<number>(1);

  const handleInputChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e?.target.value);

    if (value >= 0 && value <= 99) {
      setInputValue(value);
    }
  };

  const handleMinus = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    } else setInputValue(0);
  };
  const handlePlus = () => {
    if (inputValue >= 0 && inputValue < 99) {
      setInputValue(inputValue + 1);
    } else setInputValue(99);
  };

  return (
    <>
      <NumberInputContainer>
        <PlusAndMinusStyled type="button" onClick={handleMinus}>
          <Minus />
        </PlusAndMinusStyled>
        <NumberInputStyled
          value={inputValue}
          onChange={handleInputChange}
          onBlur={() => {
            if (inputValue > 99) {
              setInputValue(99);
            }
          }}
        />
        <PlusAndMinusStyled type="button" onClick={handlePlus}>
          <Plus />
        </PlusAndMinusStyled>
      </NumberInputContainer>
    </>
  );
}
