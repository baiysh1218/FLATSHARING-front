import React, { FC, ChangeEvent } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";

const InputStep: FC<StepProps> = ({
  formData,
  value,
  handleChange,
  placeholder,
  titles,
  name,
  errors,
}) => {
  const hasError: boolean = !!(
    errors &&
    errors[name] &&
    errors[name].trim() !== ""
  );
  console.log(errors, hasError);
  return (
    <div className={styles.input_step_wrapper}>
      <div className={styles.step1_titles}>
        <SecondTitle style={{ fontFamily: "Roboto Condensed" }}>
          {titles}
        </SecondTitle>
      </div>
      <div className={styles.inputs_wrapper}>
        <Input
          $error={hasError}
          required
          placeholder={placeholder}
          value={value}
          type="text"
          name={name}
          onChange={handleChange}
        />
        {hasError && errors && (
          <Text style={{ color: "red", fontSize: "14px" }}>{errors[name]}</Text>
        )}
      </div>
    </div>
  );
};

export default InputStep;
