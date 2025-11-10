import { Sparkle } from "lucide-react";
import React from "react";
import Card from "./Card";
import SectionTag from "../UI/SectionTag";

function Team() {
  return (
    <div className=" w-full py-24 space-y-10 px-10 bg-white">
      <div className="mx-auto  flex flex-col items-center  gap-7">

       <SectionTag
            text={"Meet The Team"}
           
          />
      

        <div>
          <p className="text-zinc-800  text-center text-5xl tracking-tight font-semibold">
            Our team is a blend of seasoned <br />
            travelers,cultural insiders,and <br />
            meticulous planners.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Team;
