import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useMutation } from "react-query";

interface LoginParams {
  email: string;
  pass: string;
}

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // The login function that sends the POST request
   const login = async ({ email, pass }: LoginParams) => {
    const response = await axios({
      url: "https://nafes.app/cv_task/api/login.php",
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      data: new URLSearchParams({
        email,
        pass,
      }).toString(),
    });

    return response.data; // Return the response data from the API
  };

  const mutation = useMutation  (login, {
    onSuccess: (data) => {
      console.log("Login successful", data);
      // Handle successful login, e.g., store token, redirect, etc.
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Example validation or form submission logic
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
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
          قم بتسجيل الدخول و ابدأالمنافسة واكتشف طرق جديدة للمذاكرةو التعلم و
          التدريب
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
