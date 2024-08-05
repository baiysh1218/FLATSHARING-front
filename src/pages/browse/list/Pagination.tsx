import { FC } from "react";
import styles from "./styles.module.css";
import arrow from "../../../assets/icons/arrow-toright.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const maxButtons = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);
  console.log(endPage, totalPages);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        className={styles.pagination_btn}
        key={i}
        onClick={() => handlePageChange(i)}
        disabled={i === currentPage}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles.pagination}>
      {pages}
      {endPage < totalPages && (
        <button
          className={styles.further_btn}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Further
        </button>
      )}
    </div>
  );
};

export default Pagination;