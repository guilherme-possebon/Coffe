import { Button } from "./styles";

interface ButtonGenericProps {
  children: React.ReactNode;
}

export function ButtonGeneric({ children }: ButtonGenericProps) {
  return (
    <>
      <Button type="button">{children}</Button>
    </>
  );
}
