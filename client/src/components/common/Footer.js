import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <div>© almacam {new Date().getFullYear()}</div>
        <a href="https://vass.kz/">Веб студия Станислава Васильева</a>
      </Container>
    </footer>
  );
};
