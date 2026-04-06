import React from "react";
import Navbar from "../Components/shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Homepage from "../Pages/homepage/Homepage";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
