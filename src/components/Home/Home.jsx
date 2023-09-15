/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

export const jobsContext = createContext();

const Home = () => {
  const jobData = useLoaderData();
  const [jobs, setjobs] = useState(jobData);
  // console.log(jobData);
  return (
    <div>
      <jobsContext.Provider value={jobs}>
        <div className="nav-container">
          <Header></Header>
        </div>
        <div className="mb-32">
          <JobCategory></JobCategory>
        </div>
        <div className="grid justify-center mb-6 text-center">
          <h1 className="font-bold text-4xl">Featured Jobs</h1>
          <h3 className="text-gray-500 text-sm">Explore thousands of job opportunities with all the information you need. Its your future</h3>
        </div>
        <div className="mx-[100px] object-fill grid grid-cols-2">
          {
            jobs.map(job => <FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
          }
        </div>
      </jobsContext.Provider>
    </div>
  );
};

export default Home;
