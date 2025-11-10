import { Sparkle } from "lucide-react";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Card } from "./Card";
import SectionTag from "../UI/SectionTag";

function BookingProcess() {
  return (
    <div className=" w-full py-24 space-y-10 bg-[#F7F7F7]">
      <div className="mx-auto  flex flex-col items-center  gap-7">
        <SectionTag
          text={"Booking Process"}
         
        />

        <div>
          <p className="text-zinc-800  text-center text-5xl tracking-tight font-semibold">
            Follow these simple steps to <br />
            reserve your trip with ease.
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex px-10 gap-4 w-full ">
          {Array.from({ length: 4 }).map(() => (
            <Card />
          ))}
        </div>

        <div className="px-10 mt-15 flex justify-between">
          <div className=" h-px w-56 bg-black">{/* progress bar */}</div>

          <div className="flex gap-2">
            <button className="size-10 rounded-full cursor-pointer hover:bg-gray-50 flex justify-center items-center bg-white">
              <IoIosArrowBack size={20} />
            </button>

            <button className="size-10 rounded-full flex cursor-pointer hover:bg-gray-50 justify-center items-center bg-white">
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingProcess;
