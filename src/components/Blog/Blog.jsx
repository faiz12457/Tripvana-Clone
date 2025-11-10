import { Sparkle } from "lucide-react";
import React from "react";
import { Card } from "./Card";
import ButtonPrimary from "../UI/ButtonPrimary";
import SectionTag from "../UI/SectionTag";

function Blog() {
  return (
    <div className=" w-full py-24 space-y-10 px-10 bg-white">
      <div className="mx-auto  flex flex-col items-center  gap-7">

      <SectionTag
          text={"Blog & Tips"}
        
        />
        

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
        <ButtonPrimary>
          Read More Blogs
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default Blog;


