import React from "react";
import clsx from "./ui/index.module.css";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import Carousel from "../../../features/carousel/Carousel";
import CarouselItem from "../../../features/carousel/CarouselItem";
import city from "../../../assets/png/austin-wehrwein-gJ5xqA8ZkLk-unsplash 1 (1).png";
import { Button } from "../../../shared/button/Button";
import { AddressGreyWrapper } from "../../../shared/addressGreyWrapperProps/AddressGreyWrapperProps";
import { AddressTitle } from "../../../shared/addressTitle/AddressTitle";
import img3 from "../../../assets/png/img3.png";

const HomesInTheCommunity = () => {
  return (
    <div className={clsx.main_wrapper}>
      <div className={`container ${clsx.title_wrapper}`}>
        <Title>Homes in the community</Title>
        <Text width="45%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </div>

      <div className={clsx.carousel}>
        <Carousel visibleItems={8}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
            <CarouselItem>
              <div className={clsx.card}>
                <img src={city} alt="" />
                <Text style={{ alignSelf: "center" }}>All city</Text>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <div className={`container `}>
        <div className={clsx.wrapper}>
          {[1, 2, 3].map((item) => (
            <div
              className={clsx.accordion}
              style={{ backgroundImage: `url(${img3})` }}
            >
              <AddressGreyWrapper>
                <AddressTitle>Central London</AddressTitle>
                <Text $through>130$+/night Airbnb</Text>
                <Text $through>60$/night</Text>
              </AddressGreyWrapper>
            </div>
          ))}
        </div>
        <Button $bg $icon>
          Browse apartments
        </Button>
      </div>
    </div>
  );
};

export default HomesInTheCommunity;
