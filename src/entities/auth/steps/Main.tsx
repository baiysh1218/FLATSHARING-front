import React, { FC } from "react";
import { MainProps } from "./model/types";
import clsx from "./ui/index.module.css";
import { Logo } from "../../../shared/logo/Logo";

const Main: FC<MainProps> = ({ children, src }) => {
  return (
    <div className={`${clsx.main_wrapper}`}>
      <div className={clsx.main_left}>
        <Logo>
          <span>flat</span>
          <span>sharing</span>
        </Logo>
        <div className={clsx.main_wrapper_children}>{children}</div>
      </div>
      <img className={clsx.images} src={src} alt="" />
    </div>
  );
};

export default Main;
