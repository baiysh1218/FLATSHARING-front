import { ReactNode } from "react";

export interface ModalModelProps {
  children: ReactNode;
}

export interface ModalProps {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export interface FormDataTypes {
  email: string;
  password: string;
}
