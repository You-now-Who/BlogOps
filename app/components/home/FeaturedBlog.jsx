import React from "react";
import Image from "next/image";

function FeaturedBlog() {
  return (
    <>
      <div className="m-5 h-full justify-between flex flex-row">
        
            <div className="flex flex-col w-1/2 justify-center items-center">
            <h1 className="font-bold text-4xl mb-10 text-white"> Coffee to taste</h1>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste quis vitae natus recusandae excepturi laudantium sed vel a odio dignissimos qui aliquam sit autem soluta, iusto blanditiis enim possimus?</p>
            </div>
        <div className="w-1/2">
          <Image
            className="w-3/4 h-auto rounded-sm"
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
