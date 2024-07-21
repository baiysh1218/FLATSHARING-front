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

const Recoll = () => {
  return (
    <div className={clsx.recoll}>
      <div className="container">
        <Title style={{ width: "44%" }}>
          Convenient to rent a place on a trip
        </Title>
      </div>

      <Carousel visibleItems={4}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <CarouselItem
            style={{ backgroundColor: "#f5f6f6", borderRadius: "10px" }}
          >
            <GreyCard
              height="700px"
              style={{
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <SecondTitle style={{ marginBottom: "30px" }}>
                  «It’s no exaggeration to say that community has changed
                  my life».
                </SecondTitle>
                <Text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </Text>
              </div>
              <div>
                <img
                  width={"154px"}
                  src={Kirill}
                  alt=""
                  style={{ marginBottom: "26px" }}
                />
                <SecondTitle style={{ marginBottom: "10px" }}>
                  Kirill Markin
                </SecondTitle>
                <Text width="55%">Founder Ozma.io, AI & Data consultant</Text>
              </div>
            </GreyCard>
          </CarouselItem>
        ))}
      </Carousel>
      <div className={`container`}>
        <Button $icon $bg>
          Try it yourself
        </Button>
      </div>
    </div>
  );
};

export default Recoll;
