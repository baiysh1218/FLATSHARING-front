import { ChangeEvent } from "react";

export type AuthFormType = {
  password: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
};

export interface StepProps {
  formData: AuthFormType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  titles?: string;
  placeholder?: string;
  name?: string;
  name2?: string;
}

export type MainProps = {
  children: React.ReactNode;
  src: string;
};
