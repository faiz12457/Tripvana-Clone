import { Sparkle } from "lucide-react";
import React, { useState } from "react";
function AboutInfo() {
  const [open, setOpen] = useState(0);
  return (
    <div className=" ">
      <div className=" w-full py-24 px-10  bg-[#091733]  space-y-10 ">
        <div className="grid  grid-cols-2">
          <div className="flex flex-col items-start  space-y-8">
            <SectionTagSecondary text="About Tripvana" />

            <div className="space-y-5">
              <p className="text-white text-5xl break-all wrap-break-word  tracking-tight font-semibold">
                More than a travel company — we’re your global journey managers.
              </p>

              <p className="text-[#9EA7B8] text-lg break-all wrap-break-word  ">
                At <span className="text-white">Tripvana</span>, we believe
                travel should be intentional, inspiring, and effortless. We
                specialize in crafting personalized experiences that go beyond
                sightseeing blending comfort, culture, and curated detail in
                every trip.
              </p>

              <p className="text-[#9EA7B8] text-lg break-all wrap-break-word  ">
                From luxury escapes and adventure tours to hidden gems and
                cultural deep-dives, we design every journey around what matters
                most to you.
              </p>

              <p className="text-[#9EA7B8] text-lg break-all wrap-break-word  ">
                We believe travel should be easy, safe, and rich with
                experience. That’s why we handle every detail from planning to
                booking
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <img src="/contactAuthor.webp" className=" rounded-xl w-16" />

              <div className="space-1">
                <p className="text-white text-xl font-medium">
                  Clarissa Gardner
                </p>
                <p className="text-[#9EA7B8] text-base">
                  Founder and Tour-expert
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <Accordain id={index} open={open} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
      <VideoSec />

      <div className=" w-full py-24 px-10 bg-[#091733]   rounded-b-4xl space-y-10 ">
        <div className="grid grid-cols-2">
          <div>
           <SectionTagSecondary text="Guest Speech" />
          </div>

          <div className="space-y-8 ">
            <p className="text-4xl tracking-tight font-semibold text-white">
              The team didn’t just plan a trip they created memories we’ll
              treasure forever. It was personal, seamless, and truly
              unforgettable.”
            </p>
            
            <div>
              <p className="text-xl text-white font-medium">Olivia Reed</p>
              <p className="text-[#9EA7B8] text-base">New York, USA</p>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
}

export default AboutInfo;

import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import VideoSec from "../VideoSec/VideoSec";
import SectionTagSecondary from "../UI/SectionTagSecondary";

function Accordain({ id, open, setOpen }) {
  return (
    <div className="px-6 py-5 w-md overflow-hidden rounded-xl bg-[#122242]">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => (prev === id ? null : id))}
      >
        <p className="text-white text-xl font-medium">
          Personalized Itineraries
        </p>
        {open === id ? (
          <FiMinus className="text-white text-2xl" />
        ) : (
          <FiPlus className="text-white text-2xl" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={false}
        animate={{ height: open === id ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className="pt-10 space-y-4">
          <p className="text-[#9EA7B8] leading-tight wrap-break-word text-lg">
            Round-the-clock personalized assistance to make your stay smooth,
            comfortable, and worry-free.
          </p>

          <img src="/accordain.png" className="rounded-xl" />
        </div>
      </motion.div>
    </div>
  );
}
