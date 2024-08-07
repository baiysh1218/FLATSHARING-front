import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import BrowseApartments from "../../entities/Browse/Header";
import { useListingQuery } from "../../app/redux/product/apiProducts";
import BrowseList from "./list/BrowseList";

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const [searchParams] = useSearchParams();

  console.log("Search Params:", searchParams);

  const { data, error, isLoading } = useListingQuery({
    offset: (currentPage - 1) * 10,
    direction: searchParams.get("direction"),
    check_in_date: searchParams.get("check_in_date"),
    check_out_date: searchParams.get("check_out_date"),
    sorting: searchParams.get("sorting"),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <BrowseApartments />
      {data ? (
        <BrowseList
          data={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Browse;
