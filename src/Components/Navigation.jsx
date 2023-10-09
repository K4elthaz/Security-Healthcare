// Navigation.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Translate from "./Translate";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Logo from "../assets/logo.png";

function Navigation() {
  const { t } = useTranslation();
  const { toggleLanguage } = Translate();
  return (
    <Navbar expand="lg" style={{backgroundColor:"#304674"}}>
      <Navbar.Brand href="#home">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ marginRight: "10px" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto mx-auto ">
          <Nav.Link href="#home" className="text-white"><h6>{t("Home")}</h6></Nav.Link>
          <Nav.Link href="#about-us" className="text-white"><h6>{t("About")}</h6></Nav.Link>
          <Nav.Link href="#products-service" className="text-white"><h6>{t("Products")}</h6></Nav.Link>
          <Nav.Link href="#careers" className="text-white"><h6>{t("Careers")}</h6></Nav.Link>
          <Nav.Link href="#contact" className="text-white"><h6>{t("Contact")}</h6></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="me-5 text-white">
        Eng
        <Switch
          defaultChecked={false}
          color="warning"
          onClick={toggleLanguage}
        />
        Jap
      </div>
    </Navbar>
  );
}

export default Navigation;