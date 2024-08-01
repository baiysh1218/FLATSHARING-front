import React, { FC, ChangeEvent } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";

const Complete: FC<StepProps> = ({
  formData,
  handleChange,
  placeholder,
  titles,
  name,
  errors,
}) => {
  return (
    <div className={styles.step2_wrapper}>
      <div style={{ marginTop: "15%" }} className={styles.step1_titles}>
        <SecondTitle style={{ fontSize: "40px", marginBottom: "30px" }}>
          Application complete!
        </SecondTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
      </div>
    </div>
  );
};

export default Complete;
