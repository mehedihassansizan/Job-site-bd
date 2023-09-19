/* eslint-disable no-unused-vars */
import React from "react";

const Blog = ({ blogData }) => {
  const { id, img, ques, description } = blogData;
  return (
    <div className="border grid ml-[20px] p-4 rounded-md">
      <div className="">
        <h1 className="font-bold">
          Question: <span className="text-gray-400">{ques}</span>
        </h1>
        <p className="mt-4">
          Description: <span className="text-gray-400" >{description}</span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
