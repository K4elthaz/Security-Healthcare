import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../assets/fb.png";
import ig from "../assets/IG.png";
import disc from "../assets/disc.png";
import skype from "../assets/skype.png";
import pic20 from "../assets/20.png";

const Footer = () => {
  const containerStyle = {
    userSelect: "none",
    background: `url(${pic20}) no-repeat center center fixed`,
    backgroundSize: "cover",
    padding: "10px",


  };
  return (
    <Container className="footer" style={containerStyle}>
      <Row>
        <Col>
          <p className="">© 2021 HealthCare. All rights reserved.</p>
          <p>
            <i>
              HealthCare is a platform that provides you with the best
              healthcare services.
            </i>
          </p>
          <h2 className="mt-3">Contact Us: </h2>

          <img className="icons " src={fb} alt="" />
          <img className="icons " src={ig} alt="" />
          <img className="icons " src={disc} alt="" />
          <img className="icons " src={skype} alt="" />
        </Col>
        <Col>
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products & Services</li>
            <li>More Info</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
