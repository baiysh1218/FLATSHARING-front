import React from "react";
import Navbar from "./entities/nav/desctop/Navbar";
import MainRoutes from "./app/routes/MainRoutes";
import Footer from "./entities/footer/Footer";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/registration" && <Navbar />}
      <MainRoutes />
      {location.pathname !== "/registration" && <Footer />}
    </>
  );
};

export default App;
