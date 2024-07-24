import React from "react";
import clsx from "./ui/index.module.css";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import { GreyCard } from "../../../shared/greyCard/GreyCard";
import cup from "../../../assets/png/cap.png";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Button } from "../../../shared/button/Button";
import { useNavigate } from "react-router-dom";

const Perks = () => {
  const navigate = useNavigate();
  return (
    <div className={`container ${clsx.perks_wrapper}`}>
      <div className={clsx.titles}>
        <Title>Community perks</Title>
        <div className={clsx.text}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </div>
      </div>
      <div className={clsx.card}>
        <GreyCard
          style={{ alignItems: "flex-start", justifyContent: "space-between" }}
          className={clsx.grey_card}
          height="490px"
        >
          <div className={clsx.icon}>
            <img src={cup} alt="" />
          </div>
          <div className={clsx.second_title}>
            <SecondTitle>Meet offline random coffee</SecondTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              massa.
            </Text>
          </div>
        </GreyCard>
        <GreyCard
          style={{ alignItems: "flex-start", justifyContent: "space-between" }}
          className={clsx.grey_card}
          height="490px"
        >
          <div className={clsx.icon}>
            <img src={cup} alt="" />
          </div>
          <div className={clsx.second_title}>
            <SecondTitle>Meet offline random coffee</SecondTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              massa.
            </Text>
          </div>
        </GreyCard>
        <GreyCard
          style={{ alignItems: "flex-start", justifyContent: "space-between" }}
          className={clsx.grey_card}
          height="490px"
        >
          <div className={clsx.icon}>
            <img src={cup} alt="" />
          </div>
          <div className={clsx.second_title}>
            <SecondTitle>Meet offline random coffee</SecondTitle>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              massa.
            </Text>
          </div>
        </GreyCard>
      </div>
      <Button
        onClick={() => navigate("/registration")}
        style={{ marginTop: "40px" }}
        $bg
        $icon
      >
        Join the community
      </Button>
    </div>
  );
};

export default Perks;
