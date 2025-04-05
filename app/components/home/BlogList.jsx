import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogList(props) {
    const blogs = [
        {
            title: "Understanding React Hooks",
            tags: ["#React", "#JavaScript", "#WebDev"],
            content:
                "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8...",
            image: "https://picsum.photos/300/300?random=1",
        },
        {
            title: "Exploring the World of AI",
            tags: ["#AI", "#MachineLearning", "#Technology"],
            content:
                "Artificial Intelligence is transforming the world as we know it. From self-driving cars to personalized recommendations, AI is everywhere...",
            image: "https://picsum.photos/300/300?random=2",
        },
        {
            title: "The Joy of Cooking",
            tags: ["#Cooking", "#Food", "#Lifestyle"],
            content:
                "Cooking is not just about making food; it's an art and a way to express yourself. Whether you're a beginner or a pro, there's always something new to learn...",
            image: "https://picsum.photos/300/300?random=3",
        },
        {
            title: "Mastering CSS Grid",
            tags: ["#CSS", "#WebDesign", "#Frontend"],
            content:
                "CSS Grid is a powerful layout system available in CSS. It allows developers to create complex and responsive layouts with ease...",
            image: "https://picsum.photos/300/300?random=4",
        },
        {
            title: "The Future of Space Exploration",
            tags: ["#Space", "#Science", "#Innovation"],
            content:
                "Space exploration has always been a frontier of human curiosity. With advancements in technology, we are closer than ever to exploring new worlds...",
            image: "https://picsum.photos/300/300?random=5",
        },
        {
            title: "Building RESTful APIs with Node.js",
            tags: ["#NodeJS", "#Backend", "#APIs"],
            content:
                "Node.js is a popular runtime for building scalable and efficient server-side applications. Learn how to create RESTful APIs using Node.js...",
            image: "https://picsum.photos/300/300?random=6",
        },
        {
            title: "Photography Tips for Beginners",
            tags: ["#Photography", "#Tips", "#Creativity"],
            content:
                "Photography is an art that anyone can learn. From understanding lighting to mastering composition, here are some tips to get started...",
            image: "https://picsum.photos/300/300?random=7",
        },
        {
            title: "The Basics of Cybersecurity",
            tags: ["#Cybersecurity", "#Tech", "#Safety"],
            content:
                "In today's digital age, cybersecurity is more important than ever. Learn the basics of protecting yourself and your data online...",
            image: "https://picsum.photos/300/300?random=8",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-start mx-10 mt-10">
                <h1 className="text-3xl font-bold text-center my-5 self-start mx-10">My Blogs:</h1>
                <div className="flex overflow-x-auto space-x-5 p-5">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] rounded-lg p-5 flex flex-col justify-between"
                        >
                            <Image
                                className="rounded-md mb-3 w-full transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-lg shadow-sm"
                                src={blog.image}
                                alt={blog.title}
                                width={300}
                                height={300}
                            />
                            <div>
                                <h2 className="font-bold text-xl mb-3 text-black">
                                    {blog.title}
                                </h2>
                                <div className="flex flex-row gap-2 mb-3 flex-wrap">
                                    {blog.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-200 text-black py-1 px-2 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-autumn-black text-sm">
                                    {blog.content.slice(0, 300)}...
                                </p>
                            </div>
                            <Link
                                href={`/blog/${index}`}
                                className="bg-black text-white py-2 px-4 mt-5 rounded-sm hover:bg-gray-800 w-fit self-start"
                            >
                                READ MORE
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BlogList;