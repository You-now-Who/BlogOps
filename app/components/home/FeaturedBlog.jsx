import React from "react";
import Image from "next/image";
import BlogButton from "../ui/BlogButton";

function FeaturedBlog() {
  return (
    <>
      <div className="m-5 h-full justify-between flex flex-row">
        <div className="flex flex-col w-1/2 px-10" style={{marginTop: "9%"}}>
            <h1 className="font-bold text-5xl mb-3 text-white">
              {" "}
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-autumn-grey text-sm">Read Time: <span className="font-bold">10 mins</span> </p>
            <div className="flex flex-row gap-2 mb-5 mt-5">
                <span className="bg-gray-200 text-black py-1 px-3 rounded-full text-sm">#Technology</span>
                <span className="bg-gray-200 text-black py-1 px-3 rounded-full text-sm">#Programming</span>
                <span className="bg-gray-200 text-black py-1 px-3 rounded-full text-sm">#Pizza</span>
            </div>
            <p className="text-autumn-black mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              iste quis vitae natus recusandae excepturi laudantium sed vel a
              odio dignissimos qui aliquam sit autem soluta, iusto blanditiis
              enim possimus?
            </p>
            <p className="text-autumn-black mt-5">
              
              Exercitationem unde earum facilis, distinctio vel iure sit autem quasi vero fuga. Ducimus eaque architecto exercitationem? Sapiente similique dolore magni?
            </p>

            <a href="#" className="bg-black text-white py-2 px-4 mt-10 rounded-sm hover:bg-gray-800 w-fit">
            READ MORE
            </a>
            
        </div>
        <div className="w-1/2">
          <Image
            className="w-3/4 h-auto rounded-sm shadow-2xl"
            style={{ marginTop: "18%", marginLeft: "10%" }}
            height={0}
            width={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 33vw"
            alt="Blog thumbnail"
            src={"https://picsum.photos/1000/1000"}
          />
        </div>
      </div>
    </>
  );
}

export default FeaturedBlog;
