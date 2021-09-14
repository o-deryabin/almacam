import React, { useState } from "react";
import logo from "../../assets/image/almacam.png";
import { CustomModal } from "./Modal";

export const Header = () => {
  const [links] = useState([
    {
      title: "Услуги",
      link: "#services",
    },
    {
      title: "О нас",
      link: "#about",
    },
    {
      title: "Отзывы",
      link: "#reviews",
    },
    {
      title: "Kонтакты",
      link: "#contacts",
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listLinks = links.map((link, i) => (
    <a href={link.link} key={i}>
      {link.title}
    </a>
  ));

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__links">{listLinks}</nav>
      <button type="button" className="button" onClick={handleShow}>
        Заказать консультацию
      </button>

      <CustomModal show={show} handleClose={handleClose} />
    </header>
  );
};
