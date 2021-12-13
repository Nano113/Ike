import React from "react";
import myLogo from "./img/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" src={myLogo} alt="logo"></img>
        <p className="logo-text">IketSwap</p>
      </div>
      <div className="header-btn">
        <a
          className="btn1"
          href="https://www.iketoken.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Analytics
        </a>
        <a
          className="btn2"
          href="https://www.iketoken.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter App
        </a>
      </div>
    </div>
  );
}

export default Header;
