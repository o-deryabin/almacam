import React, { useState } from "react";
import logo from "../../assets/image/almacam.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { Burger } from "./svg/Burger";
import { CustomModal } from "./Modal";
import { Link } from "react-scroll";

export const HeaderMobile = () => {
  const [links] = useState([
    {
      title: "Услуги",
      link: "services",
    },
    {
      title: "О нас",
      link: "about",
    },
    {
      title: "Отзывы",
      link: "reviews",
    },
    {
      title: "Kонтакты",
      link: "contacts",
    },
  ]);

  const [showCanvas, setShowCanvas] = useState(false);

  const handleCloseCanvas = () => setShowCanvas(false);
  const toggleShowCanvas = () => setShowCanvas((s) => !s);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const openModal = () => {
    handleCloseCanvas();
    handleShowModal();
  };

  const listLinks = links.map((link, i) => (
    <Link
      to={link.link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
      key={i}
      onClick={handleCloseCanvas}
    >
      {link.title}
    </Link>
  ));

  return (
    <header className="header--mobile">
      <Container className="header--mobile__container">
        <img src={logo} alt="logo" className="header__logo" />

        <div onClick={toggleShowCanvas}>
          <Burger />
        </div>

        <Offcanvas placement="end" show={showCanvas} onHide={handleCloseCanvas}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="header--mobile__links">{listLinks}</nav>
            <button type="button" className="button" onClick={openModal}>
              Заказать консультацию
            </button>
          </Offcanvas.Body>
        </Offcanvas>

        <CustomModal show={showModal} handleClose={handleCloseModal} />
      </Container>
    </header>
  );
};
