import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <NavLink to="/">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/cats">
        <h2>cats</h2>
      </NavLink>
      <nav></nav>
    </div>
  );
}

export default Header;
