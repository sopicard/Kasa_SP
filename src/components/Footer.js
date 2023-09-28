import React from "react";
import footerLogo from "../assets/logo/white_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="logo" className="footer__logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
