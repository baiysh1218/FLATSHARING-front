import styled from "styled-components";
import { ButtonProps } from "./model/types";
import arrow from "../../assets/icons/arraowButton.svg";
import arrowBlack from "../../assets/icons/arrow-black.svg";

export const Button = styled.button<ButtonProps>`
  padding: ${(props) =>
    props.$border ? "8px 24px 8px 26px" : "8px 8px 8px 26px"};
  border-radius: 33px;
  background-color: ${(props) => (props.$bg ? "#282828" : "transparent")};
  color: ${(props) => (props.$bg ? "white" : "#282828")};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.$border ? "53px" : "64px")};
  cursor: pointer;
  border: ${(props) => (props.$border ? "1px solid #282828" : "none")};
  font-size: ${(props) => (props.$fz ? props.$fz : "24px")};

  ${(props) =>
    props.$icon &&
    `
    &::after {
      content: ${props.$iconColor ? `url(${arrowBlack})` : `url(${arrow})`};
      margin-left: 12px;
      background-color: ${props.$iconColor ? "black" : "white"};
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};
`;
