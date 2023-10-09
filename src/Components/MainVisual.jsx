import React from "react";
import { Carousel, Container } from "react-bootstrap";
import hc1 from "../assets/hc1.jpg";
import hc2 from "../assets/11.jpg";
import hc3 from "../assets/12.jpg";

const MainVisual = () => {
  const carouselContainerStyle = {
    position: "relative",
    padding: "5",
  };

  const carouselStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };

  const headingStyle = {
    position: "absolute",
    zIndex: "1",
  };

  return (
<div style={carouselContainerStyle} className="mt-3">
      <Carousel fade controls={false} indicators={false} interval={3000} style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={hc3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={hc2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={hc1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1 style={headingStyle}>Medical Care</h1>
</div>
  );
};

export default MainVisual;
