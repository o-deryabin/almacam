import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import image from "../../assets/image/sale/sale.jpg";

export const Sale = () => {
  return (
    <section className="section section--sale">
      <Container>
        <Row className="section__row">
          <Col lg="6" className="section__left">
            <img src={image} alt="sale" />
          </Col>
          <Col lg="5" className="section__right">
            <h3>Получите скидку 10% на установку</h3>
            <Button variant="link">Получить скидку</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
