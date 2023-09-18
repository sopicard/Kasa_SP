import React from "react";
import logo from "../assets/desktop_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
