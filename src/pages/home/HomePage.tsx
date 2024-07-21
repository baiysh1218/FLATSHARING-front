import React, { FC } from "react";
import Hero from "../../entities/home/hero/Hero";
import Community from "../../entities/home/community/Community";
import Recoll from "../../entities/home/recoll/Recoll";
import HowItWork from "../../entities/home/howItWork/HowItWork";
import HomesInTheCommunity from "../../entities/home/homes/HomesInTheCommunity";
import Perks from "../../entities/home/perks/Perks";
import Travel from "../../entities/home/travel/Travel";
import Questions from "../../entities/questions/Questions";
import TravelWithFlatSharing from "../../entities/travelWithFlatSharing/TravelWithFlatSharing";
const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <Community />
      <Recoll />
      <HowItWork />
      <HomesInTheCommunity />
      <Perks />
      <Travel />
      <Questions />
      <TravelWithFlatSharing />
    </>
  );
};

export default HomePage;
