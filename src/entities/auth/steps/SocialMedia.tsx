import React, { FC, ChangeEvent } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";

const SocialMedia: FC<StepProps> = ({
  formData,
  handleChange,
  placeholder,
  titles,
  name,
  errors,
}) => {
  return (
    <div className={styles.step2_wrapper}>
      <div style={{ marginTop: "0%" }} className={styles.step1_titles}>
        <SecondTitle style={{ fontSize: "40px", marginBottom: "10px" }}>
          You have activated access!
        </SecondTitle>
        <Text style={{ width: "80%", marginBottom: "30px" }}>
          You will receive information about joining the community within
          20 minutes.
        </Text>
        <SecondTitle style={{ fontSize: "30px" }}>
          Share your username on Instagram or LinkedIn
        </SecondTitle>
        <Text>
          Social media verification gives you a +70% chance of approval!
        </Text>
      </div>
      <div className={styles.one_input}>
        <SecondTitle style={{ fontSize: "16px" }}>Instagram</SecondTitle>
        <Text>not added</Text>
        <Button
          $bg
          style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
        >
          Connect
        </Button>
      </div>
      <div className={styles.one_input}>
        <SecondTitle style={{ fontSize: "16px" }}>LinkedIn</SecondTitle>
        <Text>not added</Text>
        <Button
          $bg
          style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default SocialMedia;
