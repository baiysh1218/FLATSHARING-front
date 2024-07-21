import React, { FC, useState } from "react";
import styled from "styled-components";
import { CarouselProps } from "./model/types";
import arrow from "../../assets/icons/arrow_white.png";

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const CarouselInner = styled.div<{ translate: number }>`
  display: flex;
  transition: transform 0.5s ease;
  gap: 24px;
  transform: translateX(${(props) => props.translate}%);
  margin-left: 7%;
`;

const CarouselItem = styled.div<{ width: number }>`
  min-width: ${(props) => props.width}%;
  box-sizing: border-box;
`;

const NavigationButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 7%;" : "right: 7%")};
  transform: translateY(-50%);
  background-color: #282828;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  border: none;
  cursor: pointer;
`;

const Carousel: FC<CarouselProps> = ({ children, visibleItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsCount = React.Children.count(children);
  const maxIndex = itemsCount - visibleItems;
  const itemWidth = 100 / visibleItems;

  const goToNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <CarouselWrapper>
      <CarouselInner translate={-currentIndex * itemWidth}>
        {React.Children.map(children, (child) => (
          <CarouselItem width={itemWidth}>{child}</CarouselItem>
        ))}
      </CarouselInner>

      <NavigationButton left onClick={goToPrev}>
        <img style={{ transform: "rotate(180deg)" }} src={arrow} alt="" />
      </NavigationButton>
      <NavigationButton onClick={goToNext}>
        <img src={arrow} alt="" />
      </NavigationButton>
    </CarouselWrapper>
  );
};

export default Carousel;
