/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Login.css";
import { useAuth } from "../../hooks/useAuth";

interface LoginParams {
  email: string;
  pass: string;
}

interface LoginResponse {
  status: boolean;
  msg: string;
  token?: string;
  user?: {
    id: number;
    name: string;
  };
}
// validation of email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loggedIn, setLoggedIn } = useAuth(); // Get loggedIn and setLoggedIn from context

  const navigate = useNavigate();

  const login = async ({
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

  const mutation: UseMutationResult<LoginResponse, Error, LoginParams> =
    useMutation({
      mutationFn: login,
      onSuccess: (data: LoginResponse & { status: boolean; msg: string }) => {
        if (!data.status || !data.user) {
          toast.error(
            data.msg || "Login failed. Please check your credentials."
          );
          setLoggedIn(false);
          return;
        }

        // Save token and user in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token || "");
        console.log(data.user);

        setLoggedIn(true);

        // Redirect after login
        navigate("/layout/courses");
      },
      onError: (error: Error) => {
        toast.error("Login failed." + error);
      },
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!email.match(EMAIL_REGEX)) {
      toast.error("Wrong Email or Password.");
      return;
    }
    if (password.length < 6) {
      toast.error("Wrong Email or Password.");
      return;
    }
    mutation.mutate({ email, pass: password });
  };

  return (
    <div className="login">
      <div>
        <img src="/src/assets/images/Group1264.png" alt="login" />
      </div>

      <div className="login-container">
        <h1>تسجيل الدخول</h1>
        <p>
          قم بتسجيل الدخول و ابدأ المنافسة واكتشف طرق جديدة للمذاكرة والتعلم
          والتدريب
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email"> البريد الالكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password"> كلمة المرور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
