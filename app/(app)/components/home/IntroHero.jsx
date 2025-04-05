import React from "react";
import Image from "next/image";

function IntroHero() {
  return (
    <div className="p-5 h-full flex flex-row justify-between items-center bg-gradient-to-b pb-10 from-[#f8f6ee] to-[#fdf1e1]"> 
      <div className="w-1/3">
        <Image
          className="w-3/4 h-auto rounded-full shadow-md"
          style={{ marginLeft: "10%" }}
          height={0}
          width={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 33vw"
          alt="Profile photo"
          src={"https://picsum.photos/500/500"}
        />
      </div>
      <div className="flex flex-col w-2/3 px-10 mr-10 ">
        <h1 className="font-bold text-4xl mb-5 text-white">Hi! I am Shemmarie!</h1>
        <p className="text-lg italic text-black font-bold">Coder / Traveller / Life Lover</p>
        <p className="text-autumn-black mt-5 mr-30">
          I am a passionate blogger who loves to write about technology, travel, and lifestyle. Join me on my journey as I share my experiences and insights with the world.
        </p>
        
      </div>
    </div>
  );
}

export default IntroHero;   