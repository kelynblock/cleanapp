import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Book from "./book";
import Contact from "./contact";
const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Book Online />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Rout;