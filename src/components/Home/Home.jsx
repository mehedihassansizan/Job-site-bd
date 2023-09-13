/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div>
      <div className="nav-container">
        <Nav></Nav>
        <Header></Header>
      </div>
      <JobCategory></JobCategory>
    </div>
  );
};

export default Home;
