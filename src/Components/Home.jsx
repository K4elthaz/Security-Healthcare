import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import MainVisual from "./MainVisual";
const LandingPage = () => {
  return (
    <Container fluid>
      <Navigation />
      <MainVisual />
    </Container>
  );
};

export default LandingPage;
