import React from "react";
import Card from "../components/Card";
import accommodations from "../data/accomodations.json";

const Home = () => {
  return (
    <div className="cards-container">
      {accommodations.map((accommodation) => (
        <Card
          key={accommodation.id}
          title={accommodation.title}
          cover={accommodation.cover}
        />
      ))}
    </div>
  );
};

export default Home;
