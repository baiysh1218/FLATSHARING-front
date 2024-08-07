import React, { FC, ChangeEvent, useState } from "react";
import { StepProps } from "./model/types";
import styles from "./ui/index.module.css";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";

const SocialMedia: FC<StepProps> = ({ formData, handleClickChange }) => {
  console.log(formData);
  const [inst, setInst] = useState<string>(formData.instagram);
  const [link, setLink] = useState<string>(formData.linkedin);
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
        <SecondTitle fz="16px" style={{ width: "30%" }}>
          Instagram
        </SecondTitle>
        <input
          onChange={(e) => setInst(e.target.value)}
          value={inst}
          type="text"
          placeholder="Not added"
        />
        {formData.instagram ? (
          <Button
            $border
            $iconColor
            onClick={(e) => {
              setInst("");
              handleClickChange?.({ inst: "", link: link }, e);
            }}
            style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
          >
            Remove
          </Button>
        ) : (
          <Button
            $bg
            type="button"
            onClick={(e) => handleClickChange?.({ inst: inst, link: link }, e)}
            style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
          >
            Connect
          </Button>
        )}
      </div>
      <div className={styles.one_input}>
        <SecondTitle fz="16px" style={{ width: "30%" }}>
          LinkedIn
        </SecondTitle>
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="Not added"
        />
        {formData.linkedin ? (
          <Button
            $border
            $iconColor
            onClick={(e) => {
              setLink("");
              handleClickChange?.({ inst: inst, link: "" }, e);
            }}
            style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
          >
            Remove
          </Button>
        ) : (
          <Button
            $bg
            type="button"
            onClick={(e) => handleClickChange?.({ inst: inst, link: link }, e)}
            style={{ padding: "2px 35px", fontSize: "16px", minHeight: "60px" }}
          >
            Connect
          </Button>
        )}
      </div>
    </div>
  );
};

export default SocialMedia;
