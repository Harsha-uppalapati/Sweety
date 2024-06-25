// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function getCurrentTime() {
  const now = new Date();

  // 24-hour format
  const hours24 = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const time24hr = `${hours24}${minutes}`;

  // 12-hour format without AM/PM
  const hours12 = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const time12hr = `${hours12}${minutes}`;

  return { time12hr, time24hr };
}

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  let handleLogin = () => {
    if (
      getCurrentTime().time12hr + "K" === password ||
      getCurrentTime().time24hr + "K" === password
    ) {
      navigate("/Home");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Hi Chinnoda</h2>
        <div className="form-group">
          <label htmlFor="email">Name:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={() => handleLogin()}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
