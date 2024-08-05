import React, { useState } from "react";
import BrowseApartments from "../../entities/Browse/Header";
import { useListingQuery } from "../../app/redux/product/apiProducts";
import BrowseList from "./list/BrowseList";

const Browse = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useListingQuery({
    offset: (currentPage - 1) * 10,
  });
  console.log(data);

  return (
    <div>
      <BrowseApartments />
      <BrowseList
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Browse;
