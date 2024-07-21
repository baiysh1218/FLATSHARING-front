import React from "react";
import clsx from "./ui/index.module.css";

import accanture from "../../../assets/png/accanture.png";
import amazon from "../../../assets/png/amazon.png";
import booking from "../../../assets/png/booking.png";
import meta from "../../../assets/png/meta.png";
import google from "../../../assets/png/google.png";
import jet from "../../../assets/png/jet.png";

const images = [meta, booking, accanture, amazon, google, jet];

const CommunityWidgets = () => {
  return (
    <div className={clsx.bg}>
      <div className={`container ${clsx.images}`}>
        {images.map((item) => (
          <img src={item} alt={item} />
        ))}
      </div>
    </div>
  );
};

export default CommunityWidgets;
