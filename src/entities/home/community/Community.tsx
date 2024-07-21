import React, { FC } from "react";
import { CommunityProps } from "./model/types";
import { Title } from "../../../shared/title/Title";
import CommunityWidgets from "../../../widgets/home/community/CommunityWidgets";

const Community: FC<CommunityProps> = () => {
  return (
    <div style={{ marginTop: "180px" }}>
      <Title style={{ marginBottom: "40px" }} className="container">
        Community of
      </Title>
      <CommunityWidgets />
    </div>
  );
};

export default Community;
