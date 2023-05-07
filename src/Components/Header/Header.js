import React from "react";
import "./Header.css";
//import logo from "../../images/1240255.png";
import { NavLink } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
//import { Login } from "./../Login/Login";
const Header = () => {
  // const { user, logOut } = useFirebase();
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <div className="logo">
        <img
          src=" https://d1csarkz8obe9u.cloudfront.net/posterpreviews/shopping-logo-design-template-6f30f287dd3a4f4e411101468a8b951d_screen.jpg?ts=1660848408"
          alt=""
        />
      </div>

      <div className="menu">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory"> Inventory</NavLink>
        {user.email && <p className="namez"> {user.displayName}</p>}
        {user.email ? (
          // <button className="log" onClick={logOut}>Log Out</button>
          <NavLink onClick={logOut}>Log Out</NavLink>
        ) : (
          <NavLink to="/login"> Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
