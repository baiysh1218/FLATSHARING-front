import React, { FC } from "react";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { StepProps } from "./model/types";
import { TextArea } from "../../../shared/textArea/TextArea";

const Step4: FC<StepProps> = ({
  formData,
  handleChange,
  placeholder,
  titles,
  name,
}) => {
  return (
    <div className={styles.step4_wrapper}>
      <div className={styles.step4_second_wrapper}>
        <div className={styles.step4_titles}>
          <SecondTitle>{titles}</SecondTitle>
        </div>
        <div className={styles.step4_inputs}>
          <TextArea required name={name} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
};

export default Step4;
