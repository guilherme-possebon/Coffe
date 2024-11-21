import { InputRadioStyled, RadioInputContainer } from "./styles";

interface RadioInputProps {
  labelId: string;
  inputValue: string;
  relation: string;
  children: React.ReactNode;
  onChange: (value: string) => void;
  isChecked: boolean;
}

export function RadioInput({
  labelId,
  inputValue,
  children,
  relation,
  onChange,
  isChecked,
}: RadioInputProps) {
  return (
    <RadioInputContainer $color="default" $isChecked={isChecked}>
      <InputRadioStyled
        type="radio"
        id={labelId}
        value={inputValue}
        name={relation}
        checked={isChecked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={labelId}>{children}</label>
    </RadioInputContainer>
  );
}
