import React, { FC } from "react";

import images from "../../../assets/png/travel1.png";

import styles from "./styles.module.css";

interface Props {
  item: any;
}

const BrowseCard: FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={images} alt="" />
      <div>
        <div>
          <p>
            {item.city}, {item.country}
          </p>
          <p>
            2 rooms
            <span>Sep</span>
          </p>
        </div>
        <div>
          <p>75$/night</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
