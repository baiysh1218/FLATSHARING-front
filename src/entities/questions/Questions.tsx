import React, { useState } from "react";
import clsx from "./ui/index.module.css";
import { Title } from "../../shared/title/Title";
import { SecondTitle } from "../../shared/secondTitle/SecondTitle";
import { Text } from "../../shared/Text/Text";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

const Questions = () => {
  const [opened, setOpened] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpened(opened === index ? null : index);
  };

  return (
    <div className={`${clsx.questions} container`}>
      <div className={clsx.titles}>
        <Title>Questions?</Title>
        <Title>We’re here to help</Title>
      </div>
      <div className={clsx.wrapper}>
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className={`${clsx.accordion} ${opened === index ? clsx.open : ""}`}
          >
            <div className={clsx.header} onClick={() => handleToggle(index)}>
              <SecondTitle>Can I?‥</SecondTitle>
              <Arrow
                className={`${clsx.arrow} ${
                  opened === index ? clsx.rotated : ""
                }`}
              />
            </div>
            <div
              className={clsx.content}
              style={{
                maxHeight: opened === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <Text>You can…</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
