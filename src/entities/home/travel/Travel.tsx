import React from "react";
import { Title } from "../../../shared/title/Title";
import { Text } from "../../../shared/Text/Text";
import { GreyCard } from "../../../shared/greyCard/GreyCard";
import { AddressGreyWrapper } from "../../../shared/addressGreyWrapperProps/AddressGreyWrapperProps";
import { AddressTitle } from "../../../shared/addressTitle/AddressTitle";
import clsx from "./ui/index.module.css";
import images1 from "../../../assets/png/travel1.png";
import images2 from "../../../assets/png/travel2.png";
import { Button } from "../../../shared/button/Button";
import { useNavigate } from "react-router-dom";

const Travel = () => {
  const navigate = useNavigate();

  return (
    <div className={`${clsx.travel_wrapper}`}>
      <div className="container">
        <div className={clsx.travel_titles}>
          <Title>Travel cheaper</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Text>
        </div>
        <div className={clsx.card}>
          <GreyCard height="429px" src={images1} $top $left>
            <AddressGreyWrapper>
              <Text>Swap with FlatSharing Community </Text>
              <Text>500$/week</Text>
            </AddressGreyWrapper>
          </GreyCard>
          <GreyCard height="429px" src={images2} $top $left>
            <AddressGreyWrapper style={{ backgroundColor: "#282828D6" }}>
              <Text style={{ color: "white" }}>Hotel</Text>
              <Text style={{ color: "white" }}>1200$+/week</Text>
            </AddressGreyWrapper>
          </GreyCard>
        </div>
        <Button
          onClick={() => navigate("/registration")}
          style={{ margin: "40px auto" }}
          $bg
          $icon
        >
          More about cost
        </Button>
      </div>
    </div>
  );
};

export default Travel;
