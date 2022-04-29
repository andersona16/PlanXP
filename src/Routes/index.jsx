import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./styled";
import Header from "../components/modules/Header";
import Games from "../pages/Games";
import News from "../pages/News";
import Contact from "../pages/Contact";

const Routing = () => {
  return (
    <>
      <Container>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Games />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default Routing;
