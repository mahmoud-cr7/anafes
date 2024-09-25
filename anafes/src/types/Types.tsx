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