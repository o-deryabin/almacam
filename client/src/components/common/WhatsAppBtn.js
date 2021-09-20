import React from "react";
import image from "../../assets/image/whatsapp.png";

export const WhatsAppBtn = () => {
  return (
    <div>
      <a
        href="https://wa.me/77086020682"
        className="whatsapp-logo"
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt="whatsapp" />
      </a>
    </div>
  );
};
