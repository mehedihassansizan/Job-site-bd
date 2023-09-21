/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Bars3Icon} from '@heroicons/react/24/solid'
import { XMarkIcon} from '@heroicons/react/24/solid'

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="pt-8 md:px-[100px] px-[50px]">
      <div className="md:grid flex justify-between md:grid-cols-3 pb-4">
        
        <div className="w-fit flex">
          <div onClick={() => setOpen(!open)} className="w-fit md:hidden mt-2 absolute left-0 pl-4 cursor-pointer">
            {open ? <XMarkIcon className="h-8 w-8  text-blue-500" /> 
            : <Bars3Icon className="h-8 w-8  text-blue-500" /> }
          </div>
          <h1 className="mt-2 text-xl   md:text-[32px] font-bold pl-4 md:pl-0">JobSiteBD</h1>
        </div>
        <div className="text-gray-400 md:flex md:items-center">
          <div className={`grid absolute left-0 ${open ? 'top-[15%]' : '-top-48'} ml-4 md:flex md:static`}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "active pb-2" : isPending ? "pending" : "pb-2"
            }  
          >Home</NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isActive ? "active pb-2 md:pl-4" : isPending ? "pending" : "pb-2 md:pl-4"
            }
          >Statistics</NavLink>
          <NavLink
            to="/applied_jobs"
            className={({ isActive, isPending }) =>
              isActive ? "active pb-2 md:pl-4" : isPending ? "pending" : "pb-2 md:pl-4"
            }
          >Applied Jobs</NavLink>
          <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
              isActive ? "active pb-2 md:pl-4" : isPending ? "pending" : "pb-2 md:pl-4"
            }
          >Blog</NavLink>
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <button className="btn md:p-4 p-2 text-[15px]">Start Applying</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
