import styled from "styled-components";
import { SecondTitleProps } from "./model/types";

export const SecondTitle = styled.h5<SecondTitleProps>`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
  font-size: ${(props) => (props.fz ? props.fz : "22px")};
  //line-height: 28px;
`;
