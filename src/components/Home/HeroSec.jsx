import { GoArrowUpRight } from "react-icons/go";

export function HeroSection() {
  return (
    <div
      className='h-screen relative bg-black flex flex-col justify-center items-center
     bg-[url("/hero.png")] bg-cover bg-center'
    >
      <p className="text-7xl tracking-tight mb-10 text-white font-semibold text-center">
        Your Next Adventure <br /> Starts Here{" "}
      </p>
      <Button />

      {/* <HeroCarouselCard /> */}

      <ReviewCard />
    </div>
  );
}

function Button() {
  return (
    <div className="h-12 flex gap-2">
      <button className="h-full text-black bg-white rounded-full font-medium px-5 py-3">
        Book Your Tour
      </button>

      <span className="flex justify-center h-full w-12 items-center rounded-full bg-[#A0F751]">
        <GoArrowUpRight size={25} className="text-black" />
      </span>
    </div>
  );
}

import { MdOutlineStar } from "react-icons/md";
import HeroCarouselCard from "./HeroCarouselCard";
function ReviewCard() {
  return (
    <div
      className="px-5 py-7 absolute left-4 bottom-20 rounded-xl backdrop-blur-2xl flex
     flex-col items-start space-y-4 border border-gray-400"
    >
      <div className="flex text-white items-center gap-3 text-2xl font-medium">
        <p className="">Govaisor</p>
        <span className="h-5 w-0.5 bg-white"></span>
        <span>5.0</span>
      </div>

      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <MdOutlineStar key={index} className="text-[#A0F751]" size={30} />
          ))}
      </div>

      <p className="text-white text-xl">Based on 165 reviews</p>
    </div>
  );
}
