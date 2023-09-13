/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
