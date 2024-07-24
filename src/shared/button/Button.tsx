import styled from "styled-components";
import { ButtonProps } from "./model/types";
import arrow from "../../assets/icons/arraowButton.svg";

export const Button = styled.button<ButtonProps>`
  padding: ${(props) =>
    props.$border ? "16px 24px 16px 24px" : "8px 8px 8px 26px"};
  border-radius: 33px;
  background-color: ${(props) => (props.$bg ? "#282828" : "transparent")};
  color: ${(props) => (props.$bg ? "white" : "#282828")};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.$border ? "53px" : "64px")};
  cursor: pointer;

  border: ${(props) => (props.$border ? "1px solid #282828" : "none")};

  font-size: ${(props) => (props.$border || !props.$bg ? "18px" : "24px")};

  ${(props) =>
    props.$icon &&
    `
    &::after {
      content: url(${arrow});
      margin-left: 12px;
      background-color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};
`;
