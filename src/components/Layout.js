import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <div className="main-container">
        <Header />
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
