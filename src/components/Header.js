import React from "react";
import headerLogo from "../assets/logo/colored_logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" className="header__nav-link">
              Accueil
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about" className="header__nav-link">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
