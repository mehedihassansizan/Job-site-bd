/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './JobCategory.css'
import img1 from '../Icons/accounts 1.png'
import img2 from '../Icons/business 1.png'
import img3 from '../Icons/social-media 1.png'
import img4 from '../Icons/chip 1.png'
import { jobsContext } from '../Home/Home';

const JobCategory = () => {
    return (
        <div className='mt-28'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold pb-4'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='mx-[100px] mt-6 grid grid-cols-4 '>
                <div className='category-div'>
                    <img src={img1} alt="" />
                    <h1 className='text-xl font-bold pt-[32px] pb-2 '>Account & Finance</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-div'>
                    <img src={img2} alt="" />
                    <h1 className='text-xl font-bold pt-[32px] pb-2'>Creative Design</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-div'>
                    <img src={img3} alt="" />
                    <h1 className='text-xl font-bold pt-[32px] pb-2'>Marketing & Sales</h1>
                    <p>300 Jobs Available</p>
                </div>
                <div className='category-div'>
                    <img src={img4} alt="" />
                    <h1 className='text-xl font-bold pt-[32px] pb-2'>Engineering Job</h1>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;