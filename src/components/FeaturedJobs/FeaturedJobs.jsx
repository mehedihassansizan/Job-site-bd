/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faDollar} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const FeaturedJobs = ({job, setInDataBase}) => {
  // console.log(job);
  
  const { id, title, location, brand_name, salary, jobType1, jobType2, img } =
    job;
  return (
    <div className="border rounded-md h-[392px] m-6 p-[40px]">
      <img className="w-[116px] mb-[32px] h-[40px]" src={img} alt="" />
      <h1 className="font-bold text-xl mb-[8px]">{title}</h1>
      <p>{brand_name}</p>
      <div className="flex mt-[25px] mb-[16px]">
        <button className="bg-white border rounded-md border-[#7E90FE] px-[19px] py-[6px] text-[#9873FF]">
          {jobType1}
        </button>
        <button className="bg-white border rounded-md border-[#7E90FE] px-[19px] py-[6px] ml-[10px] text-[#9873FF]">
          {jobType2}
        </button>
      </div>
      <div className="flex">
        <h1 className="pr-4 text-gray-400"> <FontAwesomeIcon icon={faLocationDot} /> {location}</h1>
        <h1 className="text-gray-400"><FontAwesomeIcon icon={faDollar} />Salary: {salary}</h1>
      </div>
      <Link to={`/${id}`}><button onClick={() => setInDataBase(id)} className="btn p-4 mt-[35px] flex  items-end">View Details</button></Link>
    </div>
  );
};

export default FeaturedJobs;
