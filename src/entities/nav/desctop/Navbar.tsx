import React from "react";
import { Button } from "../../../shared/button/Button";
import { Logo } from "../../../shared/logo/Logo";
import clsx from "./ui/index.module.css";
import { Linked } from "../../../shared/Linked/Linked";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={`${clsx.nav}`}>
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
        <Button onClick={() => navigate("/registration")}>Sign In</Button>
        <Button onClick={() => navigate("/registration")} $border>
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
