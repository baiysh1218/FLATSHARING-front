import React, { FC } from "react";
import BrowseCard from "./Card";
import styles from "./styles.module.css";
interface Props {
  data: any;
}

const BrowseList: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{ marginBottom: "100px" }}
      className={`${styles.list} container`}
    >
      {data?.map((item: any) => (
        <BrowseCard item={item} />
      ))}
    </div>
  );
};

export default BrowseList;
