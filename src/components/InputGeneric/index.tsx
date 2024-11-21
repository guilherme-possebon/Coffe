import { InputContainer, InputStyled, LabelStyled } from "./styles";

interface InputGenericInterface {
  type: "text" | "number";
  limit: number;
  width: "full" | "half" | "small";
  textLabel: string;
  textLabelOptimal?: string;
  mHorizontal: boolean;
  idLabel: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export function InputGeneric({
  type,
  textLabel,
  textLabelOptimal,
  width,
  limit,
  mHorizontal,
  idLabel,
  onChange,
  value,
}: InputGenericInterface) {
  return (
    <InputContainer $width={width} $mHorizontal={mHorizontal}>
      {textLabelOptimal ? (
        <InputStyled
          id={idLabel}
          type={type}
          placeholder={textLabelOptimal}
          maxLength={limit}
          onChange={onChange}
          value={value}
        />
      ) : (
        <InputStyled
          id={idLabel}
          type={type}
          placeholder=" "
          maxLength={limit}
          onChange={onChange}
          value={value}
        />
      )}
      <LabelStyled htmlFor={idLabel}>{textLabel}</LabelStyled>
    </InputContainer>
  );
}
