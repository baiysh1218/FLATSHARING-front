import React from "react";
import BrowseApartments from "../../entities/Browse/Header";
import { useListingQuery } from "../../app/redux/product/apiProducts";
import BrowseList from "./list/BrowseList";

const Browse = () => {
  const { data } = useListingQuery({});

  return (
    <div>
      <BrowseApartments />
      <BrowseList data={data} />
    </div>
  );
};

export default Browse;
