import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, username, password);
    const { data } = await axios.post(`${baseURL}/register`, {
      email,
      username,
      password,
    });
    console.log(data);
    if (data.success) {
      //take you to login
      redirect("/login");
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Register;
