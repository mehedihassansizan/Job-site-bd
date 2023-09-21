/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import './AppliedJob.css'

const AppliedJob = ({ applyJob }) => {
  // console.log(applyJob);
  const {id, img, title, brand_name, jobType1, jobType2, salary, location } =
    applyJob;
  return (
    <div>
      
      <div className="flex border rounded-md m-12">
        <div className="w-[200px] rounded-md h-[200px] flex justify-center items-center border m-8 bg-[#F4F4F4]">
          <img className="w-[116px]  h-[40px] " src={img} alt="" />
        </div>
        <div className="detail mt-12">
          <h1>{title}</h1>
          <h1 className="font-bold text-xl mb-[8px]">{title}</h1>
          <p>{brand_name}</p>
          <div className="flex mt-[5px] mb-[16px]">
            <button className="bg-white border rounded-md border-[#7E90FE] px-[19px] py-[6px] text-[#9873FF]">
              {jobType1}
            </button>
            <button className="bg-white border rounded-md border-[#7E90FE] px-[19px] py-[6px] ml-[10px] text-[#9873FF]">
              {jobType2}
            </button>
          </div>
          <div className="flex">
            <h1 className="pr-4 text-gray-400">
              {" "}
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </h1>
            <h1 className="text-gray-400">
              <FontAwesomeIcon icon={faDollar} />
              Salary: {salary}
            </h1>
          </div>
        </div>
        <div className="grid self-center ml-[430px] w-[157px] h-10">
            <Link to={`/${id}`}><button className="btn p-4">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
