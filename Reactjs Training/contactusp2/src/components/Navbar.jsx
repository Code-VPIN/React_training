import React from "react";
import "./NavbarStyles.css"

const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <img src="/images/logo.png" alt="do some coding logo"/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default Navbar;
