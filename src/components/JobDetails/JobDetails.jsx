/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { addToDb, getShoppingCart } from "../Utilities/Database";


const JobDetails = () => {
  const jobData = useLoaderData();
  const [job] = useState(jobData);
  // console.log(job);
  const [apply, setApply] = useState([])


  const theJob = localStorage.getItem("jobId");
  const numberId = parseInt(theJob);
  const oneJob = job.find((j) => j.id === numberId);

  const none = () => {
    const btn = document.getElementById('apply-btn').style.display = 'none'
  }

  const setInFakeDb = (job) =>{
    // console.log(product);
    // const newCart = [...carts, product];
    let newJob = [];
    const exist = apply.find((j) => j.id === job.id);
    if (!exist) {
      job.quantity = 1;
      newJob = [...apply, job];
    } else {
      exist.quantity += 1;
      const remaining = apply.filter((j) => j.id !== job.id);
      newJob = [...remaining, exist];
    }
    setApply(newJob);
    addToDb(job.id);
    none();
  }

  const { description, responsibility, requirement, experience, salary, title, phone, email, address} = oneJob;

  return (
    <div>
      <div className="nav-container h-[200px] flex justify-center items-center mb-8">
        <h1 className="text-2xl font-bold">Job details</h1>
      </div>
      <div className="grid grid-cols-3 mx-[100px]">
        <div className="col-span-2">
          <h1 className="text-[16px] font-bold mb-[24px]">
            Job Description:
            <span className="text-gray-400 font-normal">{description}</span>
          </h1>
          <h1>Job Responsibility: <span className="text-gray-400">{responsibility}</span></h1>
          <h1 className="mt-[24px] mb-[20px]">Educational Requirements:<br></br> <span className="text-gray-400">{requirement}</span></h1>
          <h1>Experiences: <br></br> <span className="text-gray-400">{experience}</span></h1>
        </div>
        <div className="border rounded p-8 h-[380px] nav-container ml-8">
          <h1 className="text-2xl mb-4 font-bold">Job Details</h1>
          <hr className="border-gray-400" />
          <h1 className="my-[15px] font-bold"><FontAwesomeIcon className="text-blue-700" icon={faDollar} /> Salary : <span className="text-gray-400 font-normal">{salary}</span></h1>
          <h1 className="font-bold mb-[20px]"><FontAwesomeIcon className="text-blue-700" icon={faSuitcase} /> Job Title : <span className="text-gray-400 font-normal">{title}</span></h1>
          <h1 className="font-bold text-xl mb-4">Contact Information</h1>
          <hr className="border-gray-400 mb-5" />
          <h1 className="font-bold mb-4"><FontAwesomeIcon className="text-blue-700" icon={faPhone} /> Phone : <span className="text-gray-400 font-normal"> {phone}</span></h1>
          <h1 className="font-bold mb-4"><FontAwesomeIcon className="text-blue-700" icon={faEnvelope} /> Email: <span className="text-gray-400 font-normal">{email}</span></h1>
          <h1 className="font-bold mb-4"><FontAwesomeIcon className="text-blue-700" icon={faLocationDot} /> Email: <span className="text-gray-400 font-normal">{address}</span></h1>
        </div>
      </div>
        <div className="grid ">
          <button onClick={() => setInFakeDb(oneJob)} id="apply-btn" className="justify-self-end btn mr-[200px] mt-4">Apply Now</button>
        </div>
    </div>
  );
};

export default JobDetails;
