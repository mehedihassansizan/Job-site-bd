/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Main = () => {
  return (
    <div>
      <div className="nav-container">
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
