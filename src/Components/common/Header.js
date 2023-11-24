/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Navbar
        id="header"
        className="fixed-top header-inner-pages"
        expand="lg"
        expanded={expanded}
        collapseOnSelect // Menü öğesine tıklandığında menünün daralmasını sağlar
      >
        <Container className="container d-flex align-items-center justify-content-center">
          <Link to="/" onClick={handleClick} className="logo">
            <img
              src="assets/img/Siyah Logo.webp"
              alt="Emel Beauty Logo"
              title="Logo"
              className="img-fluid"
            />
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            expanded={expanded}
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto" id="navbar">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
                className="nav-link scrollto active"
              >
                {t("Anasayfa")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
                className="nav-link scrollto"
              >
                {t("Hakkımda")}
              </Nav.Link>

              <NavDropdown
                title={t("Hizmetlerimiz")}
                id="collasible-nav-dropdown"
                className="nav-link scroolto"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/Microblading"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Microblading")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Pudralama"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kıl Tekniği Kaş İşlemi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/EyelineDipliner"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kalıcı Eyeliner-Dipliner")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/DudakRenklendirme"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kalıcı Dudak Renklendirme")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/MakyajSilme"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kalıcı Makyaj Silme İşlemi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/BBGlow"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("BB Glow")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/KasKirpik"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kaş-Kirpik Laminasyonu")}
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={t("Eğitimlerimiz")}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/educationmicroblading"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Microblading ve Pudralama Tekniği Eğitimi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/educationeyelinerDipliner"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kalıcı Eyeliner - Dipliner Eğitimi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/educationdudakRenklendirme"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kalıcı Dudak Renklendirme Eğitimi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/educationkassilme"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                >
                  {t("Kaş Silme Eğitimi")}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/educationkaskirpiklifting"
                  onClick={() => {
                    setExpanded(false);
                    handleClick();
                  }}
                  className="nav-link scroolto"
                >
                  {t("Kaş - Kirpik Lifting Eğitimi")}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => {
                  setExpanded(false);
                  handleClick();
                }}
                className="nav-link scrollto"
              >
                {t("İletişim")}
              </Nav.Link>
              
              <Nav.Link
                href="https://www.instagram.com/makeupstudioemel/"
                target={"_blank"}
                className="social-links"
                title={t("İnstagram Adresimiz")}
              >
                <i
                  className="bx bxl-instagram"
                  style={{ fontSize: "24px" }}
                ></i>
              </Nav.Link>
              {/* <Nav.Link
            href="https://wa.me/90"
            title={t("Bize Whatsapptan Ulaşın")}
            target={"_blank"}
            className="social-links"
          >
            <i className="bx bxl-whatsapp" style={{ fontSize: "24px" }}></i>
          </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
