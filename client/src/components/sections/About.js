import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/image/about/background.webp";

import { Heading } from "../common/Headeing";

export const About = () => {
  return (
    <section className="section section--about" id="about">
      <Container className="section__container">
        <Heading subtitle="О нас" title="команда" titleRed="Надежная" />
        <Row className="section__row">
          <Col md="7">
            <img src={image} alt="about" />
          </Col>
          <Col md="4" className="section__col">
            Алмакам оказывает комплекс услуг. Мы занимаемся продажей, установкой
            и обслуживанием систем видеонаблюдения. В нашей команде работают
            только квалифицированные специалисты с большим опытом работы. Мы
            любим свою работу, поэтому подходим к ней ответственно и всё делаем
            качественно.
          </Col>
        </Row>
      </Container>
    </section>
  );
};
