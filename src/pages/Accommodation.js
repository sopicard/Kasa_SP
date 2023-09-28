import React from "react";
import Carousel from "../components/Carousel";
import accommodations from "../data/accommodations.json";
import { useParams } from "react-router-dom";

const Accommodation = () => {
  const { id } = useParams();
  const accommodation = accommodations.find((item) => item.id === id);

  return (
    <div className="accommodation-page">
      {/* */}

      {accommodation && <Carousel images={accommodation.pictures} />}

      {/* */}
    </div>
  );
};

export default Accommodation;
