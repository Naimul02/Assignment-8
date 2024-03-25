import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default MainLayout;
