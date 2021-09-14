import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { Heading } from "../common/Headeing";
import axios from "axios";

export const Contacts = () => {
  const [form, setForm] = useState({
    firstname: "",
    tel: "",
  });

  const [validated, setValidated] = useState(false);

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const sendForm = (event) => {
    try {
      event.preventDefault();
      const formButton = event.currentTarget;

      if (formButton.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return;
      }

      setValidated(true);

      axios.post("/api/email/send", { ...form });

      setValidated(false);

      setForm({
        firstname: "",
        tel: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="section section--contacts">
      <Container>
        <Heading subtitle="Контакты" title="" titleRed="Алмакам" />
        <Row className="section__content">
          <Col md="7" className="section__left">
            <div>
              <a href="tel:+77086020682">+7 708 602 0682</a>
            </div>
            <div>
              <a href="mailto:222rix@gmail.com">222rix@gmail.com</a>
            </div>
            <div>
              <a href="https://wa.me/77086020682">Whatsapp</a>
            </div>
          </Col>
          <Col md="5" className="section__right">
            <Form noValidate validated={validated} onSubmit={sendForm}>
              <FloatingLabel
                controlId="floatingInput"
                label="Введите имя"
                className="mb-3 section__input"
              >
                <Form.Control
                  type="text"
                  placeholder="Имя"
                  name="firstname"
                  value={form.firstname}
                  onChange={changeHandler}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTel"
                label="Номер телефона"
                className="section__input"
              >
                <Form.Control
                  type="text"
                  placeholder="Номер талефона"
                  name="tel"
                  required
                  value={form.tel}
                  onChange={changeHandler}
                />
              </FloatingLabel>
              <button type="submit" className="button mt-5">
                Отправить заявку
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
