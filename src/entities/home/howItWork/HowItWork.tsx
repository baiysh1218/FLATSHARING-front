import React from "react";

import clsx from "./ui/index.module.css";
import { Title } from "../../../shared/title/Title";
import { GreyCard } from "../../../shared/greyCard/GreyCard";
import img from "../../../assets/png/howitwork.png";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";
import { useNavigate } from "react-router-dom";
import content from "./content.json";

const HowItWork = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Title style={{ textAlign: "center" }}>How it works</Title>
      <div className={clsx.cards}>
        {content.map((item) => (
          <div className={clsx.card}>
            <GreyCard height="440px" src={img} />
            <div>
              <SecondTitle
                style={{ fontFamily: "Roboto Condensed, sans-serif" }}
              >
                {item.title}
              </SecondTitle>
              <Text>{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
      <div className={clsx.buttons}>
        <Button onClick={() => navigate("/registration")} $bg $icon>
          See more
        </Button>
      </div>
    </div>
  );
};

export default HowItWork;
