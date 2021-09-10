import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Divider } from "../common/Divider";
import { Heading } from "../common/Headeing";
import { CustomModal } from "../common/Modal";

export const Services = () => {
  const [services] = useState([
    {
      title: "Устанавливаем видеонаблюдения",
      description:
        "Устанавливаем систему ведеонаблюдения в квартирах, домах, магазинах, складах, заводах, школах, детских садах и т.д. Работаем как с  физическими лицами так и с юридическими.",
    },
    {
      title: "Устанавливаем домофоны",
      description:
        "Устанавливаем домофонию в квартиры и частные дома. Так же занимаемся продажей, ремонтом и обслуживанием",
    },
    {
      title: "Устанавливаем пожарную охрану",
      description:
        "Обслуживание, продажа и ремонт. Работаем с гос учреждениями и частными лицами. ",
    },
    {
      title: "Устанавливаем СКД",
      description:
        "Устанавливаем систему контроля доступа и входные группы. Ставим шлагбаумы и учет рабочего времени. ",
    },
    {
      title: "Занимаемся ремонтом и обслуживанием",
      description: "Берем на постоянное обслуживание объекты разного уровня. ",
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listServices = services.map(({ title, description }, i) => (
    <div key={i}>
      <Row className="section__row">
        <Col lg="5" md="6" className="section__col-title">
          {title}
        </Col>
        <Col lg="5" md="6" className="section__col-description ">
          {description}
        </Col>
      </Row>
      <Divider />
    </div>
  ));

  return (
    <section className="section section--services" id="services">
      <Container className="section__conatiner">
        <Heading
          subtitle="Услуги"
          title="Вашу жизнь безопаснее:"
          titleRed="Делаем"
        />
        {listServices}
        <button
          type="button"
          className="section__button button"
          onClick={handleShow}
        >
          Заказать консультацию
        </button>
        <CustomModal show={show} handleClose={handleClose} />
      </Container>
    </section>
  );
};
