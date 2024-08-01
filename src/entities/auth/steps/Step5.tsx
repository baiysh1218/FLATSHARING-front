import React, { ChangeEvent, FC } from "react";

import clsx from "./ui/index.module.css";
import { StepProps } from "./model/types";
import { Text } from "../../../shared/Text/Text";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
// import { Step1Props } from "./model/types";

const Step2: FC<StepProps> = ({
  formData,
  handleChange,
  name,
  name2,
  errors,
}) => {
  return (
    <div style={{ marginTop: "20%" }} className={clsx.step1_wrapper}>
      <div className={clsx.inputs_wrapper}>
        <SecondTitle style={{ fontFamily: "Roboto Condensed" }}>
          What’s your name?
        </SecondTitle>
        <div className={clsx.inputs}>
          <Input
            required
            $error={errors?.firstName ? true : false}
            type="text"
            name={name}
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />

          <Input
            required
            $error={errors?.lastName ? true : false}
            type="text"
            name={name2}
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>
        <div className={clsx.inputs_errors}>
          <Text style={{ color: "red", fontSize: "14px", width: "100%" }}>
            {errors?.firstName ? errors.firstName : ""}
          </Text>
          <Text style={{ color: "red", fontSize: "14px", width: "100%" }}>
            {errors?.lastName ? errors.lastName : ""}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Step2;
