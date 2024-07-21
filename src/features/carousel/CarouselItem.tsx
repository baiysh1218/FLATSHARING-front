import React, { FC } from "react";
import styled from "styled-components";
import { CarouselItemProps } from "./model/types";

const CarouselItemWrapper = styled.div`
  padding: 20px;
`;

const CarouselItem: FC<CarouselItemProps> = ({ children, style }) => {
  return (
    <CarouselItemWrapper style={{ ...style }}>{children}</CarouselItemWrapper>
  );
};

export default CarouselItem;
