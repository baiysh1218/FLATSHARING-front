import React from "react";
import { Title } from "../../shared/title/Title";
import { Text } from "../../shared/Text/Text";
import { Button } from "../../shared/button/Button";
import clsx from "./ui/index.module.css";

const TravelWithFlatSharing = () => {
  return (
    <div className={`container ${clsx.wrapper}`}>
      <Title>
        Travel
        <br /> with FlatSharing
      </Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </Text>
      <Button $bg $icon>
        Apply now
      </Button>
    </div>
  );
};

export default TravelWithFlatSharing;
