import React, { useState, useEffect, useRef } from "react";
import { Container, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import A from "../assets/a.jpg";
import B from "../assets/s.jpg";
import C from "../assets/d.jpg";
import D from "../assets/q.jpg";
import E from "../assets/w.jpg";
import F from "../assets/e.jpg";
import G from "../assets/r.jpg";

const Products = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  const [fadeIn, setFadeIn] = useState(false);

  const productsRef = useRef(null);
  const containerStyle = {
    userSelect: "none",
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

  return (
    <div
      className={`about-section1 ${fadeIn ? "fade-in" : ""}`}
      ref={productsRef}
      style={containerStyle}
      id="products-service"
    >
      <Carousel
        interval={3000}
        pause={false}
        style={{ width: "100%", height: "100%" }}
      >
        <Carousel.Item>
          <img className="prod" src={A} alt="First slide" />
          <Carousel.Caption>
            <h3 className="prodstyle">{t("Prod")}</h3>
            <p className="proddesc">{t("Lorem")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="prod" src={D} alt="First slide" />
          <Carousel.Caption>
            <h3 className="prodstyle">{t("Prod")}</h3>
            <p className="proddesc">{t("Lorem")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="prod" src={E} alt="First slide" />
          <Carousel.Caption>
            <h3 className="prodstyle">{t("Prod")}</h3>
            <p className="proddesc">{t("Lorem")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="prod" src={F} alt="First slide" />
          <Carousel.Caption>
            <h3 className="prodstyle">{t("Prod")}</h3>
            <p className="proddesc">{t("Lorem")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="prod" src={G} alt="First slide" />
          <Carousel.Caption>
            <h3 className="prodstyle">{t("Prod")}</h3>
            <p className="proddesc">{t("Lorem")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    // </Container>
  );
};

export default Products;

{
  /* <Row className="mb-5 mt-5 centered">
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
      </Row> */
}
