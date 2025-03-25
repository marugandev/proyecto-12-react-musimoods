import React, { Fragment } from "react";
import "./MainLayout.css";

import Header from "../organisms/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
