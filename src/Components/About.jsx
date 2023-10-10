import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import pic9 from "../assets/11.png";

const About = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const aboutSection = document.getElementById("about-section");
    const handleScroll = () => {
      if (aboutSection) {
        const { top } = aboutSection.getBoundingClientRect();
        setFadeIn(top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        userSelect: "none",
        backgroundColor: "#092a44",
      }}
      id="about-section"
      ref={aboutSectionRef}
      className={`about-section ${fadeIn ? "fade-in" : ""}`}
    >
      <div style={{ marginLeft: "8%", marginRight: "8%", marginTop: "5%" }}>
        <h1 className="text-white mb-5">{t("AboutUs")}</h1>
        <Row  className="">
          <Col xs={12} sm={6}>
            <h4 className="text-white">{t("Healthcare")}</h4>
            <Button className="mt-5">{t("LearnMore")}</Button>
            <Button className="mt-5 ms-3">{t("SignIn")}</Button>
          </Col>
          <Col className="pics">
            <img className="pics" src={pic9} alt="" />
          </Col>
        </Row>
        {/* <Row>
          <Col className="cards" xs={12} sm={6}>
            <Card className="notification">
              <Card.Body className="notibody">{t("Healthcare")}</Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} className="cards">
            <img className="pics" src={pic1} alt="" />
          </Col>
        </Row>
        <Row className="">
          <h1 className="mt-5 right">{t("Title1")}</h1>
          <Col xs={12} sm={6} className="cards mb-4">
            <img className="pics" src={pic2} alt="" />
          </Col>

          <Col className="cards" xs={12} sm={6}>
            <Card className="notification">
              <Card.Body className="notititle">{t("Healthcare1")}</Card.Body>
            </Card>
          </Col>
        </Row> */}
      </div>
    </Container>
  );
};

export default About;
