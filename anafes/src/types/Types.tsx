export interface LoginParams {
  email: string;
  pass: string;
}

export interface LoginResponse {
  status: boolean;
  msg: string;
  token?: string;
  user?: {
    id: number;
    name: string;
  };
}

export interface Course {
  name: string;
  icon: string;
}
export interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  required: boolean;
  defaultValue?: string; // Make defaultValue optional
}