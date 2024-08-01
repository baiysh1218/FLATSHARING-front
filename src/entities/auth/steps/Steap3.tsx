import React, { FC } from "react";
import { StepProps } from "./model/types";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";

import styles from "./ui/index.module.css";

const Steap3: FC<StepProps> = ({ formData, handleChange, titles }) => {
  return (
    <div className={styles.step3_wrapper}>
      <div className={styles.step3_second_wrapper}>
        <div className={styles.step3_titles}>
          <SecondTitle style={{ fontFamily: "Roboto Condensed" }}>
            {titles}
          </SecondTitle>
        </div>
        <div className={styles.step3_radio}>
          <div>
            <input checked type="radio" name="Yes" id="" />
            <p>Yes</p>
          </div>
          <div>
            <input type="radio" name="No" id="" />
            <p>No</p>
          </div>
          <div>
            <input type="radio" name="I haven't decided yet" id="" />
            <p>I haven't decided yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steap3;
