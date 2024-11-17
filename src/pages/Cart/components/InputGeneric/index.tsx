import { InputStyled } from "./styles";

interface InputGenericInterface {
  type: "text" | "number";
  limit: number;
  width: "full" | "half" | "small";
  placeholderLabel: string;
}

export function InputGeneric({
  type,
  placeholderLabel,
  width,
  limit,
}: InputGenericInterface) {
  return (
    <>
      <InputStyled
        type={type}
        placeholder={placeholderLabel}
        $width={width}
        maxLength={limit}
      />
    </>
  );
}
