import { InputContainer, InputStyled, LabelStyled } from "./styles";

interface InputGenericInterface {
  type: "text" | "number";
  limit: number;
  width: "full" | "half" | "small";
  textLabel: string;
  textLabelOptimal?: string;
  mHorizontal: boolean;
  idLabel: string;
}

export function InputGeneric({
  type,
  textLabel,
  textLabelOptimal,
  width,
  limit,
  mHorizontal,
  idLabel,
}: InputGenericInterface) {
  return (
    <InputContainer $width={width} $mHorizontal={mHorizontal}>
      {textLabelOptimal ? (
        <InputStyled
          id={idLabel}
          type={type}
          placeholder={textLabelOptimal}
          maxLength={limit}
        />
      ) : (
        <InputStyled
          id={idLabel}
          type={type}
          placeholder=" "
          maxLength={limit}
        />
      )}
      <LabelStyled htmlFor={idLabel}>{textLabel}</LabelStyled>
    </InputContainer>
  );
}
