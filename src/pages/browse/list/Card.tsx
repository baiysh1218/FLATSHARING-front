import React, { FC } from "react";

import images from "../../../assets/png/travel1.png";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

interface Props {
  item: any;
}

const BrowseCard: FC<Props> = ({ item }) => {
  const navigate = useNavigate();
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
        <div
          onClick={() => navigate(`/details/${item.listing_id}`)}
          className={styles.title}
        >
          <p>
            {item.city}, {item.country}
          </p>
          <p>
            2 rooms
            <span>Sep</span>
          </p>
        </div>
        <div>
          <p>Cost: {item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
