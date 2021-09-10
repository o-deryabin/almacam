import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { NextSvg } from "../common/svg/NextSvg";
import { PrevSvg } from "../common/svg/PrevSvg";
import Slider from "react-slick";

export const Benefits = () => {
  const [carouselItems] = useState([
    "Качество. У нас только сертифицированное оборудование от лучших производителей.",
    "Прозрачность. Работаем по договору и подробно описываем стоимость каждого этапа работы.",
    "Оперативность. Собственный склад, нет необходимости ждать товар под заказ.",
    "Ответственность. Точно соблюдаем оговоренные сроки.",
    "Гарантия. Предоставляем гарантию на товар и работу до 5 лет.",
  ]);

  const carousel = carouselItems.map((item, i) => (
    <div key={i} className="carousel">
      <h3 className="carousel__title">{item}</h3>
    </div>
  ));

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <PrevSvg />
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <NextSvg />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className="section section--benefits">
      <Container>
        <Row>
          <Col md="6">
            <h3 className="section__title">Преимущества работы с нами:</h3>
            <Slider {...settings}>{carousel}</Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
