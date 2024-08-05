import React, { useState } from "react";
import { Button } from "../../../shared/button/Button";
import { Logo } from "../../../shared/logo/Logo";
import userIcon from "../../../assets/icons/user-icon.svg";
import clsx from "./ui/index.module.css";
import { Linked } from "../../../shared/Linked/Linked";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../shared/modal/model/model";
import LoginModal from "../../../shared/modal/LoginModal";
import useAuth from "../../../app/helpers/hooks/UseAuth";

const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const isAuth = useAuth();

  return (
    <>
      <nav className={`${clsx.nav}`}>
        {isAuth ? (
          <>
            <div>
              <Logo onClick={() => navigate("/")}>
                <span>flat</span>
                <span>sharing</span>
              </Logo>
              <Linked onClick={() => navigate("/browse")} $size="18px">
                Browse apartments
              </Linked>
              <Linked $size="18px">How it works</Linked>
            </div>
            <div>
              <Button onClick={() => navigate("/account/myads")} $fz="18px">
                <img
                  src={userIcon}
                  alt="user icon"
                  style={{ marginRight: "10px" }}
                />{" "}
                My account
              </Button>
              <Button $fz="18px" $border>
                Add an avert
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Logo onClick={() => navigate("/")}>
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
              <Button onClick={() => setModal(true)}>Sign In</Button>
              <Button onClick={() => navigate("/registration")} $border>
                Join Now
              </Button>
            </div>
          </>
        )}
      </nav>
      <Modal>
        <LoginModal modal={modal} setModal={setModal} />
      </Modal>
    </>
  );
};

export default Navbar;
