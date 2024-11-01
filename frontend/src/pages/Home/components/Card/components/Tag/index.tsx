import { TagContainer } from "./styles";

interface TagProps {
  tagLabel: string[];
}

export function Tag({ tagLabel }: TagProps) {
  return (
    <>
      {tagLabel.map((tag) => (
        <TagContainer key={tag}>{tag}</TagContainer>
      ))}
    </>
  );
}
