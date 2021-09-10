import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export const CustomModal = ({ show, handleClose }) => {
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

      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Оставить заявку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
  );
};
