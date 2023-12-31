import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import pic9 from "../assets/11.png";
import pic21 from "../assets/21.png";

const About = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);
  const aboutSectionRef = useRef(null);

  const BG = {
    background: `url(${pic21}) no-repeat center center fixed`,
    backgroundSize: "cover",
    minHeight: "100vh",
    userSelect: "none",
    backgroundColor: "#092a44",
  }

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
      style={BG}
      id="about-section"
      ref={aboutSectionRef}
      className={`about-section ${fadeIn ? "fade-in" : ""}`}
    >
      <div style={{ marginLeft: "8%", marginRight: "8%", marginTop: "5%" }}>
        <h1 className="text-white mb-5">{t("AboutUs")}</h1>
        <Row className="">
          <Col xs={12} sm={6} className="">
            <h4 className="text-white about">{t("Healthcare")}</h4>
            <Button className="mt-5">{t("LearnMore")}</Button>
            <Button className="mt-5 ms-3">{t("SignIn")}</Button>
          </Col>
          <Col className="pics">
            <img className="pics" src={pic9} alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
