import { ChangeEvent } from "react";

export type AuthFormType = {
  password: string;
  password_confirm: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  want_to_let: string;
  is_accepted: boolean;
  firstName: string;
  lastName: string;
  address: string;
};

export interface StepProps {
  value?: string;
  formData: AuthFormType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
