import React from "react";

export type CarouselProps = {
  children: React.ReactNode;
  visibleItems: number;
};

export type CarouselItemProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};
