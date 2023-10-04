import React from "react";

const Banner = ({ type }) => {
  return (
    <div className={`banner ${type}`}>
      {type === "home" && (
        <h1 className="banner__title">
          Chez vous, <span className="break">partout et ailleurs</span>
        </h1>
      )}
    </div>
  );
};

export default Banner;
