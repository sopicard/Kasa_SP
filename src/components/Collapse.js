import React, { useState } from "react";

const Collapse = ({ title, children }) => {
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
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
