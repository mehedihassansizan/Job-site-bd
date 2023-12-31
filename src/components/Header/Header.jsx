/* eslint-disable no-unused-vars */
import React from "react";
import header_img from "../All_images/header_img.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container grid md:grid-cols-2 md:px-[100px]">
      <div className="grid content-center pt-24">
        <h1 className="text-6xl font-extrabold leading-[70px]">
          One Step <br />
          Closer to your <br />
          <span className="text-[#8F7DFF]">Dream Job</span>
        </h1>
        <p className="mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="mt-8 justify-self-start btn p-4">Get Started</button>
      </div>
      <div className="sm:max-w-9/12 justify-self-center md:shrink-0">
        <img className="mt-12 ml-24" src={header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
