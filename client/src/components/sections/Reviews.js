import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Heading } from "../common/Headeing";
import { NextSvg } from "../common/svg/NextSvg";
import { PrevSvg } from "../common/svg/PrevSvg";
import image from "../../assets/image/reviews/reviews.png";
import Slider from "react-slick";

export const Reviews = () => {
  const [carouselItems] = useState([
    {
      title:
        "Сработали быстро, уложились во все назначенные сроки, сделали все отлично, сразу видно, что работают специалисты, цены приятно порадовали.",
      name: "Марат",
    },
    {
      title:
        "На нашей фазенде нужно было поставить камеры. Ребята приехали на следующей день, установили 18 камер. Цены нас устроили. Думаю будем сотрудничать и дальше.",
      name: "Болат",
    },
    {
      title:
        "Открыла сеть магазинов и понадобилась система видеонаблюдения и пожарная безопасность, обратилась в Алмакам. Приехал инженер, грамотно составил коммерческое предложение, пунктуальный, аккуратный, действительно мастер своего дела. Осталась довольна их работой. Также подписали договор на обслуживания. Молодцы ребята.",
      name: "Сая",
    },
    {
      title:
        "Обратилась за подключением видеонаблюдения за домом с подключением через телефон. Ухожу на работу, а ребёнок дома с няней, чтоб приглядывать. Установили всё быстро и качественно. Работает без перебоев. Отдельно хочу поблагодарить мастера который объяснил как пользоваться. Рекомендую.",
      name: "Светлана",
    },
    {
      title:
        "Благодаря видеонаблюдению удалось вычислить недобросовестных сотрудников. Спасибо Алмакам за установку качественных камер и оборудования. Всё сделали профессионально и аккуратно.",
      name: "Владимир",
    },
  ]);

  const carousel = carouselItems.map(({ title, name }, i) => (
    <div key={i} className="carousel">
      <h3 className="carousel__title">{title}</h3>
      <p className="carousel__name">{name}</p>
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
    <section className="section section--reviews">
      <Container>
        <Heading subtitle="Отзывы" title="доверьтесь нам!" titleRed="Алмакам" />
        <Row className="section__row">
          <Col lg="6" className="section__left">
            <img src={image} alt="reviews" />
          </Col>
          <Col lg="6">
            <Slider {...settings}>{carousel}</Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
