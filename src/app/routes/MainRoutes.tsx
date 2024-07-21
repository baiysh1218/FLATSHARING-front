import React from "react";
import { Route, Routes } from "react-router-dom";
import { PUBLIC_ROUTES } from "./data";

const MainRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route path={route.path} key={route.id} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
