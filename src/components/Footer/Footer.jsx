/* eslint-disable no-unused-vars */
import React from 'react';
import facebook from '../Logo/facebook.jpg'
import instagram from '../Logo/ins.jpg'
import twitter from '../Logo/twitter.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] h-[500px] mt-24'>
            <div className='grid grid-cols-5 mx-[200px] py-[100px]'>
                <div>
                    <div>
                        <h1 className='text-2xl font-bold text-white mb-4'>Job Site BD</h1>
                        <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, temporibus?</p>
                    </div>
                    <div className='flex gap-2 mt-[20px]'>
                        <img className='rounded-lg h-[20px]' src={facebook} alt="" />
                        <img className='rounded-lg h-[20px]' src={instagram} alt="" />
                        <img className='rounded-lg h-[20px]' src={twitter} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mx-[40px] text-white'>Company</h1><br />
                    <div className='mx-[40px]'>
                        <Link className='text-gray-400'>About us</Link><br />
                        <Link className='text-gray-400'>Work</Link><br />
                        <Link className='text-gray-400'>Latest News</Link><br />
                        <Link className='text-gray-400'>Careers</Link><br />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mx-[40px] text-white'>Product</h1>
                    <div className='mt-[20px] mx-[40px]'>
                        <Link className='text-gray-400'>Prototype</Link><br />
                        <Link className='text-gray-400'>Plans & Pricing</Link><br />
                        <Link className='text-gray-400'>Customers</Link><br />
                        <Link className='text-gray-400'>Integrations</Link><br />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mx-[40px] text-white'>Support</h1>
                    <div className='mt-[20px] mx-[40px]'>
                        <Link className='text-gray-400'>Help Desk</Link><br />
                        <Link className='text-gray-400'>Sales</Link><br />
                        <Link className='text-gray-400'>Become a Partner</Link><br />
                        <Link className='text-gray-400'>Developers</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl mx-[10px] text-white'>Contact</h1>
                    <div className='mx-[10px] mt-6'>
                        <h1 className='text-gray-400'>524 Broadway</h1>
                        <h1 className='text-gray-400'>NYC +1 777 - 978 - 5570</h1>
                    </div>
                </div>
            </div>
            <hr className='mx-[200px] border-gray-400' />
            <div className='flex mx-[200px] mt-8 text-gray-400'> 
                <div className='grow'>
                    <h1>@2023 CareerHub. All Rights Reserved</h1>
                </div>
                <div >
                    <h1>Powered by CareerHub</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;