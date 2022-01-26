import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Service" element={<Service />} />
      </Routes>
    </>
  );
};

export default App;
