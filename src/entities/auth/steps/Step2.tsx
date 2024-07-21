import React, { FC, ChangeEvent } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";

const Step2: FC<StepProps> = ({
  formData,
  handleChange,
  placeholder,
  titles,
  name,
}) => {
  return (
    <div className={styles.step2_wrapper}>
      <div className={styles.step2_titles}>
        <SecondTitle style={{ fontFamily: "Roboto Condensed" }}>
          {titles}
        </SecondTitle>
      </div>
      <div className={styles.inputs_wrapper}>
        <Input
          placeholder={placeholder}
          type="text"
          name={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Step2;
