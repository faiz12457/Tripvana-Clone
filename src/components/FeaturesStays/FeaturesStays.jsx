import React, { useRef, useState } from "react";
import { Sparkle } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import ResortCard from "./RecortCard";
import { IoIosArrowForward } from "react-icons/io";
import ButtonPrimary from "../UI/ButtonPrimary";
import SectionTag from "../UI/SectionTag";
import { CenteredCarousel } from "./CenteredCarousel";
function FeaturesStays() {
    const resorts = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470",
    title: "Cavo Tagoo, Mykonos, Greece",
    desc: "Overlooking the Aegean Sea, Cavo Tagoo is a chic Greek resort.",
    price: "$320/night",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470",
    title: "Amanpulo Resort, Philippines",
    desc: "Private villas on pristine white-sand beaches with ocean views.",
    price: "$450/night",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1470",
    title: "Six Senses, Maldives",
    desc: "An eco-luxury paradise offering secluded water villas and coral reefs.",
    price: "$520/night",
  },
  {
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1470",
    title: "Amangiri, Utah, USA",
    desc: "Desert serenity meets ultra-luxury at this architectural masterpiece.",
    price: "$700/night",
  },
  {
    image: "/resort.png",
    title: "One&Only Reethi Rah, Maldives",
    desc: "Elegant villas surrounded by crystal-clear lagoons and lush greenery.",
    price: "$620/night",
  },
];

  const swiperRef = useRef(null);
 

  const [activeIndex, setActiveIndex] = useState(0);

  const activeResort = resorts[activeIndex];

  return (
    <div className="w-full py-24 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto flex flex-col items-center gap-7">
        <SectionTag text={"Featured Stays"} />

        <div>
          <p className="text-zinc-800 text-center text-5xl tracking-tight font-semibold">
            Stay where comfort meets <br />
            character. Each hotel for its style, <br />
            service, and sense of place.
          </p>
        </div>
      </div>

      {/* Carousel */}

      <CenteredCarousel
        resorts={resorts}
        ref={swiperRef}
        onSlideChange={(index) => setActiveIndex(index)}
      />

      <div className="">
        <div className="mx-auto  w-fit gap-32 flex items-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=" text-gray-600 size-fit p-3  cursor-pointer rounded-full bg-[#f7f7f7]"
          >
            <IoIosArrowBack />
          </button>

          <div className=" w-fit max-w-md flex flex-col items-center  gap-3">
            <div className="text-center">
              <p className="text-3xl font-medium">
                {activeResort?.title}
              </p>
              <p className="text-[#656E7F] font-medium text-base  mt-3">
                {activeResort?.desc}
              </p>
            </div>

            <ButtonPrimary>{activeResort?.price}</ButtonPrimary>

            <p className="text-[#656E7F] text-base">View Details</p>
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
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
