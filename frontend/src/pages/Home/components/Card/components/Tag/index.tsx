import { TagContainer } from "./styles";

interface TagProps {
  tagLabel: string;
}

export function Tag({ tagLabel }: TagProps) {
  return (
    <>
      <TagContainer>{tagLabel}</TagContainer>
    </>
  );
}
