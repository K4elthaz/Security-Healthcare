import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import hc1 from "../assets/hc1.jpg";
import hc2 from "../assets/11.jpg";
import hc3 from "../assets/12.jpg";

const MainVisual = () => {
  const [headingIndex, setHeadingIndex] = useState(0);
  const headings = ["Healthcare", "健康管理"];
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Delay the initial fade-in effect when the component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 500); // Adjust the delay as needed

    const interval = setInterval(() => {
      // Start the fade-out effect
      setFadeIn(false);

      // Delay the change of heading until after the fade-out
      setTimeout(() => {
        setHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);

        // Trigger the fade-in after changing the heading
        setFadeIn(true);
      }, 1000); // Delay the heading change for 1 second after fade-out
    }, 4000); // Change heading every 4 seconds (1 second for fade-out and 3 seconds for fade-in)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [headings.length]);

  const carouselContainerStyle = {
    position: "relative",
  };

  const carouselStyle = {
    position: "absolute",
    marginRight: "8%",
    marginLeft: "8%",
    width: "84%",
  };

  const headingStyle = {
    position: "absolute",
    zIndex: "1",
    top: "50%",
    left: "28%",
    opacity: fadeIn ? 1 : 0,
    transition: "opacity 1.5s ease", // Adjust the duration as needed
  };

  const centeredHeadingStyle = {
    fontSize: "200px",
    color: "#ffffff",
    textShadow: "2px 2px 4px #304674",
    userSelect: "none",
  };

  return (
    <div style={carouselContainerStyle} className="mt-5">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={4000} // Match the interval with the heading change interval
        style={carouselStyle}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={hc2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={hc3}
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
      <div className={`backdrop ${fadeIn ? "show" : ""}`} style={headingStyle}>
        <h1 className="centered-heading" style={centeredHeadingStyle}>
          {headings[headingIndex]}
        </h1>
        <h4 className="centered-description">
          "Protecting Your Health, Securing Your Peace of Mind - Healthcare
          Security Solutions."
        </h4>
      </div>
    </div>
  );
};

export default MainVisual;
