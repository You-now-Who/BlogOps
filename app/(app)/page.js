"use client"
import { useEffect, useState } from "react";

import FeaturedBlog from "./components/home/FeaturedBlog";
import IntroHero from "./components/home/IntroHero";
import BlogList from "./components/home/BlogList";
import Cookies from "js-cookie";

export default function Home() {
  const [password, setPassword] = useState();

  useEffect(() => {
    setPassword(Cookies.get('magic-words'))
    console.log(password)
    
  }, [password])

  return (
    <div>
      <div className="bg-box">
      </div>
      <div className="h-screen">
        <FeaturedBlog />
      </div>
      {/* <hr /> */}
      <div className="">
        <IntroHero/>
      </div>
      <div className="h-screen bg-gradient-to-b from-[#fdf1e1] to-[#f8f6ee]">
      <hr className="mx-20 border-autumn-beige border-2 rounded-lg"/>
        <BlogList />
      </div>
    </div>
  );
}
