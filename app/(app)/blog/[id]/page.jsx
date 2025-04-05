"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import blogs from "../../data/blogs.json"; // Simulated database

function BlogPage() {
    const { id } = useParams(); // Use useParams to get the dynamic route parameter
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (id !== undefined) {
            const blogIndex = parseInt(id, 10); // Convert id to a number
            if (!isNaN(blogIndex) && blogs[blogIndex]) {
                setBlog(blogs[blogIndex]);
            } else {
                setBlog(null); // Handle invalid id
            }
        }
    }, [id]);

    if (!blog) {
        return <p className="p-10 text-center text-lg">Blog not found or loading...</p>;
    }

    return (
        <div className="bg-[var(--color-autumn-white)] text-[var(--color-autumn-grey)] min-h-screen px-6 lg:px-24 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Blog Title */}
            <h1 className="text-4xl lg:text-5xl font-playfair text-[var(--color-autumn-brown)] leading-tight">
              {blog.title}
            </h1>
    
            {/* Meta Info */}
            <div className="flex items-center justify-between mt-4 text-[var(--color-autumn-black)]">
              <span className="text-sm font-roboto">Published Date: <span></span>{blog.date}</span>
              <div className="flex space-x-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[var(--color-autumn-brown)] text-[var(--color-autumn-white)] text-xs font-roboto px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
    
            {/* Blog Image */}
            <div className="mt-6">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
    
            {/* Blog Content */}
            <div className="mt-8 text-lg font-roboto text-[var(--color-autumn-grey)] leading-relaxed">
              <p>{blog.content}</p>
            </div>
    
            {/* Read More Button */}
            <div className="mt-6">
              <button className="bg-[var(--color-autumn-green)] text-white px-6 py-2 rounded-full shadow-md hover:bg-[var(--color-autumn-brown)] transition">
                Read More
              </button>
            </div>
          </div>
        </div>
      );
}

export default BlogPage;
