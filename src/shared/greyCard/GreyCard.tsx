import styled from "styled-components";
import { GreyCardProps } from "./model/types";

export const GreyCard = styled.section<GreyCardProps>`
  background-color: #f5f6f6;
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: cover;
  background-position: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  min-height: ${(props) => (props.height ? props.height : "684px")};
  display: flex;
  flex-direction: ${(props) => (!props.$column ? "column" : "row")};
  justify-content: ${(props) => (props.$left ? "flex-start" : "center")};
  align-items: ${(props) => (props.$left ? "flex-start" : "center")};
  border-radius: 26px;
  padding: ${(props) => (props.$hero ? "25px" : "20px")};
  gap: ${(props) => (props.$hero ? "20px" : "")};
`;
