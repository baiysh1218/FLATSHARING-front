import styled from "styled-components";
import { LinkedProps } from "./model/types";

export const Linked = styled.p<LinkedProps>`
  font-weight: ${(props) => (props.$weight ? props.$weight : "normal")};
  font-size: ${(props) => (props.$size ? props.$size : "16px")};
  color: #282828;
  line-height: 21px;
  cursor: pointer;
`;
