import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../assets/fb.png";
import ig from "../assets/IG.png";
import disc from "../assets/disc.png";
import skype from "../assets/skype.png";
import pic20 from "../assets/20.png";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";


const Footer = () => {
  const containerStyle = {
    userSelect: "none",
    background: `url(${pic20}) no-repeat center center fixed`,
    backgroundSize: "cover",
  };

  const fullWidth = {
    width: "100%",
    padding: "30px",
  };

  const { t } = useTranslation();
  const { toggleLanguage } = Translate();

  return (
    <div>
      <Container
        fluid
        className="footer"
        style={{ ...containerStyle, ...fullWidth }}
        id="contact"
      >
        <Row style={fullWidth}>
          <Col>
            <h2 className="">{t("ContactUs")}</h2>

            <img className="icons" src={fb} alt="" />
            <img className="icons" src={ig} alt="" />
            <img className="icons" src={disc} alt="" />
            <img className="icons" src={skype} alt="" />
            <p className="">{t("Reserve")}</p>
            <p>
              <i>
              {t("Say")}
              </i>
            </p>
          </Col>
          <Col className="">
            <h3>Contact Information</h3>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
