/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";


const Main = () => {
  return (
    <div>
      <div className="nav-container">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
