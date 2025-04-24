import React from "react";
import { blogs } from "../constant";
import BlogCard from "./BlogCard";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center  mb-8  text-purple-500 font-kaushan border w-fit mx-auto px-7 py-[2px] rounded-md bg-gray-200 grad-orange">
        React Interview Questions - Blog
      </h1>
      {blogs.map((blog, index) => (
        <BlogCard key={index} question={blog.question} answer={blog.answer} />
      ))}
    </div>
  );
};

export default BlogsPage;
