import React, { FC } from "react";
import BrowseCard from "./Card";
import styles from "./styles.module.css";
import Pagination from "./Pagination";
interface Props {
  data: any;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const BrowseList: FC<Props> = ({ data, currentPage, setCurrentPage }) => {
  const totalPages = 100;
  return (
    <div
      style={{ marginBottom: "100px" }}
      className={`${styles.list} container`}
    >
      {data?.map((item: any) => (
        <BrowseCard item={item} />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BrowseList;
