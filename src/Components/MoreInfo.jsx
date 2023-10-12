import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import pic20 from "../assets/20.png";
import pic10 from "../assets/12.png";


const MoreInfo = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);
  const aboutSectionRef1 = useRef(null);

  const containerStyle = {
    minHeight: "100vh",
    userSelect: "none",
    background: `url(${pic20}) no-repeat center center fixed`,
    backgroundSize: "cover",
  };

  const textShadowStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (aboutSectionRef1.current) {
        const { top } = aboutSectionRef1.current.getBoundingClientRect();
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
      className={`about-section ${fadeIn ? "fade-in" : ""}`}
      id="about-section1"
      ref={aboutSectionRef1}
      style={containerStyle}
    >
        <div style={{ marginLeft: "8%", marginRight: "8%", marginTop: "5%" }}>
      <Row className="mt-5">
        <Col className="pics">
          <img className="pics" src={pic10} alt="" />
        </Col>
        <Col xs={12} sm={6}>
          <div className="about" style={textShadowStyle}>
            <h1 className=" mt-5 text-white">{t("Missions")}</h1>
            <h4 className=" mt-5 text-white">{t("Mission")}</h4>
            <p className="text-white mt-5"  ><i>"{t("WHO")}"</i></p>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default MoreInfo;
