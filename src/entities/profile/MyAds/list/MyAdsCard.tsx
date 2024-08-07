import React, { FC } from "react";
import { myAdsCardProps } from "../../model/types";
import styles from "../../ui/index.module.css";
import photo from "../../../../assets/png/ads_photo.png";
import { SecondTitle } from "../../../../shared/secondTitle/SecondTitle";
import { Text } from "../../../../shared/Text/Text";
import { useNavigate } from "react-router-dom";

const MyAdsCard: FC<myAdsCardProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <img
        src={
          item?.used_listing_pictures[0]?.picture_url
            ? item?.used_listing_pictures[0].picture_url
            : photo
        }
        className={styles.images}
        alt=""
      />
      <div className={styles.card_content}>
        <ul>
          <li>Edit</li>
          <li>Archive</li>
          <li>Remove</li>
        </ul>

        <div className={styles.card_content_info}>
          <SecondTitle
            onClick={() => navigate(`/details/${item?.listing_id}`)}
            weight="500"
            fz="24px"
          >
            apartment in the San Blas area
          </SecondTitle>
          <Text style={{ marginBottom: "10px" }}>
            {item?.district}, {item?.city}, {item?.country}
          </Text>
          <div className={styles.card_content_text}>
            <p>{item?.room} room</p>
            <div className={styles.date}>
              <Text>
                {item?.date_from} — {item?.date_to}
              </Text>
            </div>
          </div>
          <Text fw="500" fz="20px">
            {item?.price}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default MyAdsCard;
