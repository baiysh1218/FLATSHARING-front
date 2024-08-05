import React, { FC, ChangeEvent, useState } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import { Modal } from "../../../shared/modal/model/model";
import LoginModal from "../../../shared/modal/LoginModal";
import { Linked } from "../../../shared/Linked/Linked";

const Step1: FC<StepProps> = ({
  formData,
  handleChange,
  placeholder,
  titles,
  name,
  errors,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={styles.step2_wrapper}>
      <div className={styles.step1_titles}>
        <Title>Registration</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <Text style={{ display: "flex", gap: "3px" }}>
          I already have an account.{" "}
          <Linked
            onClick={() => setModal(true)}
            style={{ textDecoration: "underline" }}
          >
            Sign In
          </Linked>{" "}
          to my personal account
        </Text>
        <SecondTitle fz="22px" style={{ fontFamily: "Roboto Condensed" }}>
          {titles}
        </SecondTitle>
      </div>
      <div className={styles.inputs_wrapper}>
        <Input
          $error={errors?.email ? true : false}
          required
          placeholder={placeholder}
          value={formData.email}
          type="text"
          name={name}
          onChange={handleChange}
        />
        <Text style={{ color: "red", fontSize: "14px" }}>
          {errors?.email ? errors.email : ""}
        </Text>
      </div>
      <Modal>
        <LoginModal modal={modal} setModal={setModal} />
      </Modal>
    </div>
  );
};

export default Step1;
