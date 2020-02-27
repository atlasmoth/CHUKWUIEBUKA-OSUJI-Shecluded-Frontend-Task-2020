import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <NavLink to="/">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/cats">
        <h2>Cats</h2>
      </NavLink>
      <NavLink to="/lotr">
        <h2>LOTR</h2>
      </NavLink>
    </div>
  );
}

export default Header;
