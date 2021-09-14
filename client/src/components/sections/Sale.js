import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/image/sale/sale.webp";
import { CustomModal } from "../common/Modal";

export const Sale = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="section section--sale">
      <Container>
        <Row className="section__row">
          <Col lg="6" className="section__left">
            <img src={image} alt="sale" />
          </Col>
          <Col lg="5" className="section__right">
            <h3>Получите скидку 10% на установку</h3>
            <button
              type="button"
              className="button section__button"
              onClick={handleShow}
            >
              Получить скидку
            </button>
          </Col>
        </Row>
        <CustomModal show={show} handleClose={handleClose} />
      </Container>
    </section>
  );
};
