import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { CustomModal } from "../common/Modal";

export const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="section section--main">
      <Container className="section__conatiner">
        <h1 className="section__title maintitle">
          Установка системы видеонаблюдения в кратчайшие сроки.
        </h1>
        <h4 className="section__description">
          Хотите наблюдать за всем прямо со
          <br /> своего телефона? Мы это устроим!
        </h4>
        <button
          type="button"
          className="button section__button"
          onClick={handleShow}
        >
          Оставить заявку
        </button>

        <CustomModal show={show} handleClose={handleClose} />
      </Container>
    </section>
  );
};
