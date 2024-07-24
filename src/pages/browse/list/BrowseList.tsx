import React, { FC } from "react";
import BrowseCard from "./Card";
import styles from "./styles.module.css";
interface Props {
  data: any;
}

const BrowseList: FC<Props> = ({ data }) => {
  return (
    <div className={styles.list}>
      {data?.map((item: any) => (
        <BrowseCard item={item} />
      ))}
    </div>
  );
};

export default BrowseList;
