import styled from "styled-components";
import { InputProps } from "./model/types";

export const Input = styled.input<InputProps>`
  padding: 16px 20px 16px 20px;
  background-color: ${(props) =>
    props.$error ? "rgba(211,47,47,0.10)" : "#f5f6f6"};
  border: ${(props) => (props.$error ? "1px solid red" : "none")};
  border-radius: 33px;
  width: 100%;
  &::placeholder {
    color: ${(props) => (props.$error ? "red" : "")};
  }
`;
