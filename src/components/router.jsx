import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Work from "./work";
import About from "./About";
import Contact from "./Contact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;