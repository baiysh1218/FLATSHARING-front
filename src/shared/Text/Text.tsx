import styled from "styled-components";
import { TextProps } from "./model/types";

export const Text = styled.p<TextProps>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  width: ${(props) => (props.width ? props.width : "")};
  align-self: flex-start;
  text-decoration: ${(props) => (props.$through ? "" : "none")};
`;
