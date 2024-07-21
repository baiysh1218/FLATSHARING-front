import React from "react";

import clsx from "./ui/index.module.css";
import { Logo } from "../../shared/logo/Logo";
import { Linked } from "../../shared/Linked/Linked";

import { ReactComponent as FaceBook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <div className={`${clsx.footer} container`}>
      <div>
        <Logo>
          <span>flat</span>
          <span>sharing</span>
        </Logo>
      </div>
      <div>
        <Linked $size="18px">How it works</Linked>
        <Linked $size="18px">Browse apartments</Linked>
        <Linked $size="18px">Cost</Linked>
      </div>
      <div>
        <FaceBook />
        <Instagram />
        <Telegram />
      </div>
    </div>
  );
};

export default Footer;
