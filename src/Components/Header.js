import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>store</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
