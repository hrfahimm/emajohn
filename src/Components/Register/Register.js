import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
export const Register = () => {
  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <input type="submit" valu="Submit" />
          <p className="massage">
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
