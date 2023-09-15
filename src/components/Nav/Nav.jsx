/* eslint-disable no-unused-vars */
import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="mx-[100px] pt-8">
      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-[32px] font-bold">JobSiteBD</h1>
        </div>
        <div className="flex self-center text-[gray]">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            id="padding-nav"
          >Home</NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            id="padding-nav"
          >Statistics</NavLink>
          <NavLink
            to="/applied_jobs"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            id="padding-nav"
          >Applied Jobs</NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isActive ? "active" : isPending ? "pending" : ""
            }
            id="padding-nav"
          >Blog</NavLink>
        </div>
        <div className="flex justify-end">
          <button className="btn">Start Applying</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
