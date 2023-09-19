/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Applied_Jobs = () => {
  const jobData = useLoaderData();
  //   console.log(job);
  const [applyJob, setApplyJob] = useState(jobData);



  return (
    <div>
      <div className="nav-container h-[200px] flex justify-center items-center mb-8">
        <h1 className="text-2xl font-bold">Applied Jobs</h1>
      </div>
      <div className="relative inline-block grid justify-items-end rounded-md p-2 mr-12 drop-down">
        <div className="w-[100px] bg-[#F4F4F4] p-2 rounded">
          <button className="">
            Filter By{" "}
            <FontAwesomeIcon
              className="text-gray-300 pl-2 "
              icon={faArrowDown}
            />
          </button>
          <div className="d-none absolute drop-down-content bg-[#F4F4F4] mt-2 p-2 rounded text-center">
            <button  className="mb-2 border p-2">Full Time</button>
            <button className="mb-2 border">Part Time</button>
          </div>
        </div>
      </div>
      <div>
        {jobData.map((j) => (
          <AppliedJob key={j.id} applyJob={j}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default Applied_Jobs;
