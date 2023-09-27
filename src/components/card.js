import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover, linkable }) => {
  const cardContent = (
    <div className="card">
      <img src={cover} alt={title} className="card__cover" />
      <h2 className="card__title">{title}</h2>
    </div>
  );

  return linkable ? (
    <Link to={`/accommodation/${id}`} className="card__link">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Card;
