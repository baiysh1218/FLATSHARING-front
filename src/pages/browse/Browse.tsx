import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BrowseApartments from "../../entities/Browse/Header";
import { useListingQuery } from "../../app/redux/product/apiProducts";
import BrowseList from "./list/BrowseList";

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const getSearchParams = () => {
    const params = new URLSearchParams(location.search);
    const searchParams = {
      direction: params.get("direction") || "",
      check_in_date: params.get("check_in_date") || "",
      check_out_date: params.get("check_out_date") || "",
      sorting: params.get("sorting") || "",
    };
    return searchParams;
  };

  const searchParams = getSearchParams();

  console.log("Search Params:", searchParams);

  const { data, error, isLoading } = useListingQuery({
    offset: (currentPage - 1) * 10,
    direction: searchParams.direction,
    check_in_date: searchParams.check_in_date,
    check_out_date: searchParams.check_out_date,
    sorting: searchParams.sorting,
  });

  console.log("API Data:", data, error, isLoading);

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
