import React from "react";
import { Divider } from "./Divider";

export const Heading = ({ subtitle, titleRed, title }) => {
  return (
    <>
      <h5 className="headeing__subtitle">{subtitle}</h5>
      <Divider />
      <marquee width="100%" direction="left" scrollamount="12">
        <h2 className="headeing__title">
          <span className="col-red">{titleRed}</span> {title}
        </h2>
      </marquee>

      <Divider />
    </>
  );
};
