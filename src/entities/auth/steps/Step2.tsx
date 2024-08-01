import React, { FC, useState } from "react";
import { StepProps } from "./model/types";
import clsx from "./ui/index.module.css";
import { Text } from "../../../shared/Text/Text";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";

const Step2: FC<StepProps> = ({
  name,
  name2,
  handleChange,
  formData,
  errors,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className={clsx.step1_wrapper}>
      <div className={clsx.step1_titles}>
        <SecondTitle>Create a password for your account</SecondTitle>
        <Text>
          Come up with a strong password consisting of letters, numbers
          and other symbols.
        </Text>
      </div>
      <div className={clsx.inputs_wrapper}>
        <div className={clsx.inputs}>
          <Input
            required
            $error={errors?.password ? true : false}
            type={checked ? "text" : "password"}
            name={name}
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <Text style={{ color: "red", fontSize: "14px" }}>
            {errors?.password ? errors.password : ""}
          </Text>
          <Input
            required
            $error={errors?.password_confirm ? true : false}
            type={checked ? "text" : "password"}
            name={name2}
            value={formData.password_confirm}
            onChange={handleChange}
            placeholder="Confirm"
          />
          <Text style={{ color: "red", fontSize: "14px" }}>
            {errors?.password_confirm ? errors.password_confirm : ""}
          </Text>
          <div className={clsx.check}>
            <input
              onChange={() => setChecked(!checked)}
              type="checkbox"
              name=""
              id="chekc"
            />
            <label htmlFor="chekc">Show password</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
