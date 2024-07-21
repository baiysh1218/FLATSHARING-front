import React, { ChangeEvent, FC } from "react";

import clsx from "./ui/index.module.css";
import { AuthFormType, StepProps } from "./model/types";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
// import { Step1Props } from "./model/types";

const Step1: FC<StepProps> = ({ formData, handleChange, name, name2 }) => {
  return (
    <div className={clsx.step1_wrapper}>
      <div className={clsx.step1_titles}>
        <Title>Registration</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <Text>I already have an account. Sign In to my personal account</Text>
      </div>
      <div className={clsx.inputs_wrapper}>
        <SecondTitle style={{ fontFamily: "Roboto Condensed" }}>
          What’s your name?
        </SecondTitle>
        <div className={clsx.inputs}>
          <Input
            type="text"
            name={name}
            // value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name={name2}
            // value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
