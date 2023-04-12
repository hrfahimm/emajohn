import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

export const Login = () => {
  const { signinUsingGoogle } = useAuth();

  return (
    <div className="login-form  ">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input name="" id="" type="emal" placeholder="Your Email" />
          <br />

          <input type="password" placeholder="Enter Password" />
          <br />
          <br />
          <input type="submit" valu="Submit" />
        </form>
        <br />
        <br />
        <br />
        <p>
          New to Emajon <Link to="/register">Create Account</Link>
        </p>
        <div>------or------</div>
        <button onClick={signinUsingGoogle} className="btn-reguler">
          {" "}
          Google SIgn in{" "}
        </button>
      </div>
    </div>
  );
};
