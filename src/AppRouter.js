import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function AppRouter() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouter;
