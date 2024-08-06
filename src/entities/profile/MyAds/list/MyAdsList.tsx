import React, { FC } from "react";
import { myAdsListProps } from "../../model/types";
import MyAdsCard from "./MyAdsCard";
import styles from "../../ui/index.module.css";

const MyAdsList: FC<myAdsListProps> = ({ data }) => {
  return (
    <div className={styles.ads_list}>
      {data?.map((item: any) => (
        <MyAdsCard item={item} />
      ))}
    </div>
  );
};

export default MyAdsList;
