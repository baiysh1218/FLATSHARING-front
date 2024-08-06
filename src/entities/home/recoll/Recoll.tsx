import React from "react";
import { Title } from "../../../shared/title/Title";
import Carousel from "../../../features/carousel/Carousel";
import CarouselItem from "../../../features/carousel/CarouselItem";
import { GreyCard } from "../../../shared/greyCard/GreyCard";
import { Text } from "../../../shared/Text/Text";
import Kirill from "../../../assets/png/Kirill.png";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import clsx from "./ui/index.module.css";
import { Button } from "../../../shared/button/Button";
import { useNavigate } from "react-router-dom";

import content from "./content.json";

const Recoll = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx.recoll}>
      <div className="container">
        <Title style={{ width: "44%" }}>
          Convenient to rent a place on a trip
        </Title>
      </div>

      <Carousel visibleItems={4}>
        {content.map((item) => (
          <CarouselItem
            style={{
              backgroundColor: "#f5f6f6",
              borderRadius: "10px",
              maxWidth: "320px",
            }}
          >
            <GreyCard
              height="500px"
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "0",
              }}
            >
              <div>
                <SecondTitle style={{ marginBottom: "14px" }}>
                  {item.title}
                </SecondTitle>
                <Text>{item.description}</Text>
              </div>
              <div>
                <img
                  width={"154px"}
                  src={Kirill}
                  alt=""
                  style={{ marginBottom: "14px", marginTop: "14px" }}
                />
                <SecondTitle style={{ marginBottom: "10px" }}>
                  {item.name}
                </SecondTitle>
                <Text width="55%">{item.position}</Text>
              </div>
            </GreyCard>
          </CarouselItem>
        ))}
      </Carousel>
      <div className={`container`}>
        <Button onClick={() => navigate("/registration")} $icon $bg>
          Try it yourself
        </Button>
      </div>
    </div>
  );
};

export default Recoll;
