import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row style={{padding:"20px"}}>
        <Col xs={12} sm={6}>
        <p className="">© 2021 HealthCare. All rights reserved.</p>
          <h2 className="mt-3">Contact Us: </h2>
          <p>
            HealthCare is a platform that provides you with the best healthcare
            services.
          </p>
        </Col>
        <Col xs={12} sm={6}>
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
