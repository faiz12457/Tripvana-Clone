import { Sparkle } from "lucide-react";
import React from "react";
import { Card } from "./Card";

function Blog() {
  return (
    <div className=" w-full py-24 space-y-10 px-10 bg-white">
      <div className="mx-auto  flex flex-col items-center  gap-7">
        <div className="flex gap-0.5 items-center">
          <div className="size-9 rounded-full shadow flex justify-center items-center">
            {/* Icon here */}
                <Sparkle className="text-white " size={22} fill='#0b1c3a' />
          </div>
          <div className="px-3.5 py-2 w-fit rounded-full shadow">
            Blog & Tips
          </div>
        </div>

        <div>
          <p className="text-black  text-center text-5xl tracking-tight font-semibold">
            Expert travel advice to help you <br />
            explore smarter and deeper.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />

       
      </div>

      <div className="flex justify-center ">
        <button className="bg-[#091733] cursor-pointer px-5 py-3 rounded-full text-white">
          Read More Blogs
        </button>
      </div>
    </div>
  );
}

export default Blog;


