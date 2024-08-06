import { ChangeEvent, DragEvent } from "react";

export type AuthFormType = {
  password: string;
  password_confirm: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  want_to_let: string;
  img: any;
  is_accepted: boolean;
  firstName: string;
  lastName: string;
  address: string;
  instagram: string;
  linkedin: string;
};

export interface StepProps {
  value?: string;
  formData: AuthFormType;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickChange?: (inst: string, link: string) => void;
  handleDrop?: (e: DragEvent<HTMLInputElement>) => void;
  passwordConfirm?: string;
  setPasswordConfirm?: (passwordConfirm: string) => void;
  titles?: string;
  placeholder?: string;
  name: string;
  name2?: string;

  errors?: { [key: string]: string };
}

export type MainProps = {
  children: React.ReactNode;
  src: string;
};
