import React from "react";
import "./Header.css";
import logo from "../../images/1240255.png";
import { NavLink } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
const Header = () => {
  // const { user, logOut } = useFirebase();
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory"> Inventory</NavLink>
        {user.email && <p>{user.displayName}</p>}
        {user.email ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <NavLink to="/login"> Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
