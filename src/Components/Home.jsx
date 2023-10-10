import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import MainVisual from "./MainVisual";
import AboutUs from "./About";
import MoreInfo from "./MoreInfo";
const LandingPage = () => {
  return (
    <Container fluid>
      <Navigation />
      <div className="main-visual">
        <MainVisual />
      </div>
      <AboutUs />
      <MoreInfo />
    </Container>
  );
};

export default LandingPage;
