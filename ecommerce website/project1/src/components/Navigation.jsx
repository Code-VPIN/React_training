import React from "react";
import "./NavigationStyles.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img className="brandlogo" src="/images/Nike-Logo.png" alt="" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
