import styled from "styled-components";
import { logoProps } from "./model/types";

export const Logo = styled.h2<logoProps>`
  & span {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -5;
  }
  & span:first-child {
    font-weight: 400;
  }
  & span:last-child {
    font-weight: 600;
  }
`;
