import React, { FC } from "react";
import { Title } from "../../../shared/title/Title";
import clsx from "./ui/index.module.css";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";
import { GreyCard } from "../../../shared/greyCard/GreyCard";
import { SecondaryText } from "../../../shared/secondaryText/SecondaryText";
import cityView from "../../../assets/png/cityView.png";
import Ivan from "../../../assets/png/Ivan.png";
import { AddressGreyWrapper } from "../../../shared/addressGreyWrapperProps/AddressGreyWrapperProps";
import { AddressTitle } from "../../../shared/addressTitle/AddressTitle";
import { Lessor } from "../../../shared/lessor/Lessor";
import { LessorLeft } from "../../../shared/lessor/LessorLeft";
import { LessorAvatar } from "../../../shared/lessor/LessorAvatar";
import { LessorRight } from "../../../shared/lessor/LessorRight";
import { useNavigate } from "react-router-dom";

const Hero: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`container ${clsx.hero}`}>
      <GreyCard $hero style={{ alignItems: "flex-start" }}>
        <Title $main>Travel 2–3 times cheaper</Title>
        <Text width="66%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Text>
        <div className={clsx.button_group}>
          <Button onClick={() => navigate("/registration")} $icon $bg>
            Join the community
          </Button>
          <SecondaryText>takes only 5 minutes</SecondaryText>
        </div>
      </GreyCard>
      <GreyCard
        style={{ alignItems: "flex-start", justifyContent: "space-between" }}
        src={cityView}
      >
        <AddressGreyWrapper>
          <AddressTitle>Central London</AddressTitle>
          <Text $through>130$+/night Airbnb</Text>
          <Text>60$/night</Text>
        </AddressGreyWrapper>
        <Lessor>
          <LessorLeft>
            <LessorAvatar src={Ivan} />
            <div>
              <AddressTitle>Ivan</AddressTitle>
              <Text>Founder Ozma.io, AI & Data consultant</Text>
            </div>
          </LessorLeft>
          <LessorRight>
            <Text style={{ color: "white", alignSelf: "center" }}>
              Live at Ivan's flat
            </Text>
          </LessorRight>
        </Lessor>
      </GreyCard>
    </div>
  );
};

export default Hero;
