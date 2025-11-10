import React, { useState } from "react";
import { Sparkle } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import ResortCard from "./RecortCard";
import { IoIosArrowForward } from "react-icons/io";
import ButtonPrimary from "../UI/ButtonPrimary";
import SectionTag from "../UI/SectionTag";
function FeaturesStays() {
  const resorts = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470",
      features: ["Private Villas", "Attached Pool"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470",
      features: ["Jungle View", "Private Villas", "Attached Pool"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1470",
      features: ["Beach View", "Private Villas"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? resorts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === resorts.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-24 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto flex flex-col items-center gap-7">
      <SectionTag
            text={"Featured Stays"}
           
          />
        

        <div>
          <p className="text-zinc-800 text-center text-5xl tracking-tight font-semibold">
            Stay where comfort meets <br />
            character. Each hotel for its style, <br />
            service, and sense of place.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative my-20 flex justify-center items-center">
        <div className="relative flex items-center overflow-hidden gap-4 justify-center w-full  h-[400px]">
          {resorts.map((resort, index) => {
            const isActive = index === activeIndex;
            const isLeft =
              index === (activeIndex - 1 + resorts.length) % resorts.length;
            const isRight = index === (activeIndex + 1) % resorts.length;

            return (
              <motion.div
                key={index}
                initial={false}
                //  animate={{ x: translateX, zIndex }}
                transition={{ duration: 0.6 }}
                className=""
              >
                <ResortCard />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="mx-auto  w-fit gap-32 flex items-center">
          <button
            onClick={handlePrev}
            className=" text-gray-600 size-fit p-3  cursor-pointer rounded-full bg-[#f7f7f7]"
          >
            <IoIosArrowBack />
          </button>

          <div className=" w-fit max-w-md flex flex-col items-center  gap-3">
            <div className="text-center">
              <p className="text-3xl font-medium">
                Cavo Tagoo, Mykonos, Greece
              </p>
              <p className="text-[#656E7F] text-base  mt-3">
                Overlooking the Aegean Sea, Cavo Tagoo is a <br />
                chic Greek resort.
              </p>
            </div>

            <ButtonPrimary>From $320/night</ButtonPrimary>

            <p className="text-[#656E7F] text-base">View Details</p>
          </div>

          <button
            onClick={handleNext}
            className=" text-gray-600 size-fit p-3  cursor-pointer rounded-full bg-[#f7f7f7]"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesStays;
