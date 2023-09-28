import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner";
import accommodations from "../data/accomodations.json";

const Home = () => {
  return (
    <>
      <Banner type="home" />
      <div className="cards-container">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
            linkable={true}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
