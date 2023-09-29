import React from "react";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import accommodations from "../data/accommodations.json";
import { useParams } from "react-router-dom";
import Error404 from "../pages/Error404.js";

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = accommodations.find((item) => item.id === id);

  if (!accommodation) {
    return <Error404 />;
  }

  const [firstName, lastName] = accommodation.host.name.split(" ");

  return (
    <>
      {/* Carousel */}
      {accommodation && <Carousel images={accommodation.pictures} />}

      {/* Infos section */}
      <div className="accommodation__info">
        <div className="accommodation__details">
          <h1 className="accommodation__title">{accommodation.title}</h1>
          <p className="accommodation__location">{accommodation.location}</p>
        </div>
        <div className="host__info">
          <div className="host__name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img
            className="host__img"
            src={accommodation.host.picture}
            alt={accommodation.host.name}
          />
        </div>
      </div>

      {/* Tags and stars section */}
      <div className="tags-stars">
        <div className="tags">
          {accommodation.tags.map((tag, index) => (
            <span className="tags__item" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star ${
                index < accommodation.rating ? "star-solid" : "star-empty"
              }`}
            ></i>
          ))}
        </div>
      </div>

      {/* Collapses */}
      <div className="description-equipments">
        <div className="description__container">
          <Collapse title="Description">{accommodation.description}</Collapse>
        </div>
        <div className="equipments__container">
          <Collapse title="Équipements" isList>
            {accommodation.equipments}
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default Accommodation;
