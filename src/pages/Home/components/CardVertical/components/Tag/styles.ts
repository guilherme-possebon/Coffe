import styled from "styled-components";
import { Tag } from "../../../../../../styles/global";

export const TagContainer = styled(Tag)`
  color: ${(props) => props.theme["yellow-dark"]};
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 4px 8px;
  border-radius: 16px;
  text-transform: capitalize;
`;
