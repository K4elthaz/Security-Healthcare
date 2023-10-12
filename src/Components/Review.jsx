import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic1 from "../assets/IG.png";
import footer from "../assets/footer.png";

const Review = () => {
  const review = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const rating = 4;
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <span key={i} className="star-filled">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star-empty">
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (review.current) { // Check if review ref exists
        const { top } = review.current.getBoundingClientRect();
        setFadeIn(top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const BG = {
    background: `url(${footer}) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "50vh", // Set to an appropriate value
    userSelect: "none",
  };

  return (
    <Container
      fluid
      id="careers"
      style={BG}
      className={`about-section2 ${fadeIn ? "fade-in" : ""}`}
      ref={review}
    >
      <div className="p-5">
        <h1 className="mt-5 mb-5 centered">
          We value your feedback on our healthcare and security products and
          services to continuously improve and meet your needs.
        </h1>
        <Row className="">
          <Col className="centered">
            <div className="card mt-5">
              <div className="card-content">
                <div className="card-title">John Doe</div>
                <p className="card-description">
                  <i>
                    Certainly, here's a sample of client feedback: "Our
                    experience with your healthcare and security services has
                    been outstanding. Your team's dedication to our safety and
                    well-being is greatly appreciated."
                  </i>
                </p>
                <div className="star-rating">{renderStars(rating)}</div>
              </div>
            </div>
          </Col>
          <Col className="centered">
            <div className="card mt-5">
              <div className="card-content">
                <div className="card-title">Arnold Celis</div>
                <p className="card-description">
                  <i>
                    Certainly, here's a sample of client feedback: "Our
                    experience with your healthcare and security services has
                    been outstanding. Your team's dedication to our safety and
                    well-being is greatly appreciated."
                  </i>
                </p>
                <div className="star-rating">{renderStars(rating)}</div>
              </div>
            </div>
          </Col>
          <Col className="centered">
            <div className="card mt-5">
              <div className="card-content">
                <div className="card-title">Sheldon Cooper</div>
                <p className="card-description">
                  <i>
                    Certainly, here's a sample of client feedback: "Our
                    experience with your healthcare and security services has
                    been outstanding. Your team's dedication to our safety and
                    well-being is greatly appreciated."
                  </i>
                </p>
                <div className="star-rating">{renderStars(rating)}</div>
              </div>
            </div>
          </Col>
          <Col className="centered">
            <div className="card mt-5">
              <div className="card-content">
                <div className="card-title">John Doe</div>
                <p className="card-description">
                  <i>
                    Certainly, here's a sample of client feedback: "Our
                    experience with your healthcare and security services has
                    been outstanding. Your team's dedication to our safety and
                    well-being is greatly appreciated."
                  </i>
                </p>
                <div className="star-rating">{renderStars(rating)}</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Review;
