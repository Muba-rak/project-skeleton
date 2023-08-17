import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });
    if (data.success) {
      // store token inside localstorage
      localStorage.setItem("token", data.token);
      // redirect welcome
      redirect("/welcome");
    } else {
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{loading ? `Logging in .. ` : "Continue"}</button>
      </form>
    </div>
  );
};

export default Login;
