import styled from "styled-components";
import { TextProps } from "./model/types";

export const Text = styled.p<TextProps>`
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  font-size: ${(props) => (props.fz ? props.fz : "16px")};
  line-height: 22px;
  width: ${(props) => (props.width ? props.width : "")};
  align-self: flex-start;
  text-decoration: ${(props) => (props.$through ? "line-through" : "none")};
`;
