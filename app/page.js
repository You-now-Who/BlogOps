import Image from "next/image";
import FeaturedBlog from "./components/home/FeaturedBlog";
import IntroHero from "./components/home/IntroHero";

export default function Home() {
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
      <hr className="mx-20 border-autumn-beige border-2 rounded-lg"/>
      {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
      <div className="h-screen bg-gradient-to-b from-[#fdf1e1] to-[#f8f6ee]">

      </div>
    </div>
  );
}
