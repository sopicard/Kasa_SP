import React, { useState } from "react";

const Collapse = ({ title, children, isList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
        <i
          className={`fa fa-chevron-up collapse__chevron ${
            isOpen ? "collapse__chevron--rotate" : ""
          }`}
        ></i>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : " "}`}>
        {isList ? (
          <ul className="collapse__list">
            {children.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{children}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
