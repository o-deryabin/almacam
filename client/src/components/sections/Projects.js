import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Heading } from "../common/Headeing";
import Slider from "react-slick";
import { NextSvg } from "../common/svg/NextSvg";
import { PrevSvg } from "../common/svg/PrevSvg";
import image1 from "../../assets/image/projects/projects1.jpg";
import image2 from "../../assets/image/projects/projects2.jpg";

export const Projects = () => {
  const [slides] = useState([
    {
      title: "Оздоровительный центр “Денсаулык”.",
      description:
        "Установлено 35 камер. Удаленный доступ. Осуществляем обслуживание.",
      image: image1,
    },
    {
      title: "ТЦ Евразия.",
      description: "Установлено 10 камер. Специальная камера на кассу. ",
      image: image2,
    },
    {
      title: "Рынок Алтын Орда.",
      description:
        "Установлено 24 камеры. Установлены датчики на движение. Также ночное освещение. ",
      image: image1,
    },
    {
      title: "Завод Ademi Qala.",
      description:
        "Установлено 90 камер. Освещение на всей территории. Датчики движения. Входная группа. Шлагбаум для внутренней парковки. ",
      image: image1,
    },
  ]);

  const listSlides = slides.map(({ title, description, image }, i) => (
    <div key={i} className="section__slide">
      <img src={image} alt="projects" className="section__image" />
      <h3 className="section__title">{title}</h3>
      <p className="section__description">{description}</p>
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section section--projects">
      <Container>
        <Heading subtitle="Наши проекты" title="Доверяют" titleRed="Нам" />
        <div className="section__content">
          <Slider {...settings}>{listSlides}</Slider>
        </div>
      </Container>
    </section>
  );
};
