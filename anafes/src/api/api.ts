import axios from "axios";
import { LoginParams, LoginResponse } from "../types/Types";

// Login API request
export const login = async ({
  email,
  pass,
}: LoginParams): Promise<LoginResponse> => {
  const response = await axios({
    url: "https://nafes.app/cv_task/api/login.php",
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    data: new URLSearchParams({
      email: email,
      pass: pass,
    }),
  });

  return response.data;
};
