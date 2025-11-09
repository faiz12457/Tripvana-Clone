import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function HeroCarouselCard() {
  return (
    <div className="p-1.5 pb-3.5 w-[272px]  bg-white rounded-xl">
      <div className="relative">
        <img
          src="/travel.png"
          className="rounded-xl  w-full h-44 object-cover"
        />
        <button className="px-2.5 py-1.5 text-sm absolute top-2 right-2 rounded-full  bg-white text-black">
          From $180/night
        </button>
      </div>

      <div className="flex justify-between mt-3 p-1">
        <p className="text-lg font-medium  wrap-break-word">Ubud Jungle Retreat in Bali</p>

        <span className="flex cursor-pointer justify-center size-10 items-center rounded-full bg-white border border-gray-300">
          <GoArrowUpRight size={25} className="text-black" />
        </span>
      </div>
    </div>
  );
}

export default HeroCarouselCard;
