import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import axios from "axios";

export const CustomModal = ({ show, handleClose }) => {
  //form state
  const [form, setForm] = useState({
    firstname: "",
    tel: "",
  });

  //toast state
  const [showA, setShowA] = useState(false);

  const [toastText, setToastText] = useState("");

  const toggleShowA = () => setShowA(!showA);

  //validate state
  const [validated, setValidated] = useState(false);

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const sendForm = async (event) => {
    try {
      event.preventDefault();
      const formButton = event.currentTarget;

      if (formButton.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return;
      }

      setValidated(true);

      const res = await axios.post("/api/email/send", { ...form });

      setValidated(false);

      setForm({
        firstname: "",
        tel: "",
      });

      handleClose();

      setToastText(res.data.message);
      toggleShowA();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
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
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="me-auto">Almacam</strong>
        </Toast.Header>
        <Toast.Body>{toastText}</Toast.Body>
      </Toast>
    </>
  );
};
