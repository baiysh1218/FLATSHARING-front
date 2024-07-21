import styled from "styled-components";
import { TitleProps } from "./model/types";

export const Title = styled.h3<TitleProps>`
  font-size: ${(props) => (props.$main ? "74px" : "62px")};
  font-weight: 600;
  line-height: 77px;
  text-transform: uppercase;
`;
