import React, { useState } from "react";
import logo from "../../assets/image/almacam.png";

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

  const listLinks = links.map((link, i) => (
    <a href={link.link} key={i}>
      {link.title}
    </a>
  ));

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__links">{listLinks}</nav>
      <button type="button" className="button">
        Заказать консультацию
      </button>
    </header>
  );
};
