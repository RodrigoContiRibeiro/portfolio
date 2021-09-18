import React from "react";

import Logo from "../../assets/icons/logo.svg";
import "./index.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <a href="/" className="logoLink">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="navigationContainer">
        <div className="navItem">
          <a href="/sobre">sobre</a>
        </div>
        <div className="navItem">
          <a href="/contato">contato</a>
        </div>
        <div className="navItem trabalhos">
          <a href="/trabalhos" className="trabalhos">
            trabalhos
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
