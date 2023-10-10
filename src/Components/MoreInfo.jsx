import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";

import pic10 from "../assets/12.png";


const MoreInfo = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);
  const aboutSectionRef1 = useRef(null);

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
      style={{
        minHeight: "100vh",
        userSelect: "none",
      }}
    >
        <div style={{ marginLeft: "8%", marginRight: "8%", marginTop: "5%" }}>
      <Row className="mt-5">
        <Col className="pics">
          <img className="pics" src={pic10} alt="" />
        </Col>
        <Col xs={12} sm={6}>
          <div className="about">
            <h4 className=" mt-5 text-white">{t("Healthcare")}</h4>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default MoreInfo;
