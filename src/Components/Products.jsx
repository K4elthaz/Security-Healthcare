import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import pic1 from "../assets/13.png";
import pic2 from "../assets/17.png";
import pic3 from "../assets/15.png";
import pic4 from "../assets/16.png";
import pic20 from "../assets/24.png";
import pic21 from "../assets/33.png";
import pic22 from "../assets/34.png";

const Products = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);

  const productsRef = useRef(null);
  const containerStyle = {
    minHeight: "100vh",
    userSelect: "none",
    background: `url(${pic20}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundColor: "#092a44",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (productsRef.current) {
        const { top } = productsRef.current.getBoundingClientRect();
        setFadeIn(top <= window.innerHeight / 2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderTooltip = (text) => <Tooltip id="tooltip">{text}</Tooltip>;

  return (
    <Container
      id="products-service"
      fluid
      style={containerStyle}
      className={`about-section ${fadeIn ? "fade-in" : ""}`}
      ref={productsRef}
    >
      <h1 className="text-white centered mt-5">{t("Prod")}</h1>
      <Row className="mb-5 mt-5 centered">
        <Col xs={12} sm={6}>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip(t("Lorem"))}
          >
            <img className="prod" src={pic1} alt="" />
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip(t("Lorem"))}
          >
            <img className="prod" src={pic21} alt="" />
          </OverlayTrigger>
        </Col>
        <Col xs={12} sm={6}>
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip(t("Lorem"))}
          >
            <img className="prod" src={pic2} alt="" />
          </OverlayTrigger>
        </Col>
      </Row>
      <Row className="mt-5 centered">
        <Col xs={12} sm={6}>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip(t("Lorem"))}
          >
            <img className="prod" src={pic3} alt="" />
          </OverlayTrigger>
        </Col>
        <Col xs={12} sm={6}>
          <OverlayTrigger
            placement="top"
            overlay={renderTooltip(t("Lorem"))}
          >
            <img className="prod" src={pic4} alt="" />
          </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={renderTooltip(t("Lorem"))}
            >
              <img className="prod" src={pic22} alt="" />
            </OverlayTrigger>

        </Col>
      </Row>
    </Container>
  );
};

export default Products;
