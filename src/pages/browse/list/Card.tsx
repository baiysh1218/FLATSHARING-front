import React, { FC } from "react";

import images from "../../../assets/png/travel1.png";

import styles from "./styles.module.css";

interface Props {
  item: any;
}

const BrowseCard: FC<Props> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        src={
          item.used_listing_pictures[0]
            ? item.used_listing_pictures[0].picture_url
            : images
        }
        alt=""
      />
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
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
