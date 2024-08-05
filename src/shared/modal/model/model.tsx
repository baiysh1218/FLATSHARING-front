import { FC, useMemo } from "react";
import { createPortal } from "react-dom";
import { ModalModelProps } from "./types";

export const Modal: FC<ModalModelProps> = ({ children }) => {
  const containerElement = useMemo<Element | null>(
    () => document.getElementById("modal-container"),
    []
  );
  if (!containerElement) {
    throw new Error("Modal container element not found");
  }
  return createPortal(children, containerElement);
};
