import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">
        Oups! La page que{" "}
        <span className="break">vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="not-found__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
