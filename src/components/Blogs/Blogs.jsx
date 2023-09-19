/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogData = useLoaderData();
    // console.log(blogData);
    return (
        <div className='grid grid-cols-3 mx-12 mt-12 '>
            {
                blogData.map(b => <Blog key={b.id} blogData={b}></Blog>)
            }
        </div>
    );
};

export default Blogs;