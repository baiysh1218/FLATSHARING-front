import React, { FC, useState } from "react";
import { StepProps } from "./model/types";
import clsx from "./ui/index.module.css";
import { Text } from "../../../shared/Text/Text";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";

const Step5: FC<StepProps> = ({
  titles,
  placeholder,
  handleChange,
  formData,
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
            type={checked ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <Input
            type={checked ? "text" : "password"}
            name="password"
            onChange={handleChange}
            placeholder="Confirm"
          />
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

export default Step5;
