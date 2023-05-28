import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

const Outils = () => {
  return (
    <div data-testid="outils" className="w-full h-full flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Outils;
