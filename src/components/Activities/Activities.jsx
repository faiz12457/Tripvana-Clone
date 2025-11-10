import React from "react";

function Activities() {
  const [activeTab, setActiveTab] = React.useState("All");

  const tabs = ["All", "Adventure", "Cultural", "Relaxation", "Wildlife"];

  return (
    <div className="w-full  bg-white px-10 ">
      <div className="mx-auto  flex flex-col items-center py-24 gap-7">
        <SectionTag
          text={"Our Tour Activities"}
      
        />

        <div>
          <p className="text-zinc-800  text-center text-5xl tracking-tight font-semibold">
            Whether you seek adventure, <br />
            culture, or calm — we’ve got the <br />
            perfect experience for every kind <br />
            of traveler.
          </p>
        </div>
      </div>

      <div>
        {/* Activities content  */}

        <div className=" flex gap-2  w-fit mx-auto">
          {tabs.map((tab) => {
            return (
              <ButtonPrimary
                onclick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-[#091733]"
                    : "bg-[#f8f8f8] text-black!"
                }`}
              >
                {tab}
              </ButtonPrimary>
            );
          })}
        </div>

        <TrueInfiniteSwiper />
      </div>
    </div>
  );
}

export default Activities;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Sparkle } from "lucide-react";
import ButtonPrimary from "../UI/ButtonPrimary";
import SectionTag from "../UI/SectionTag";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
];

const heights = [320, 380, 300, 360, 340, 390, 310];

function TrueInfiniteSwiper() {
  return (
    <div className="w-full overflow-hidden py-10">
      {/* first swiper */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        loop={true}
        allowTouchMove={false}
        className="flex items-center"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} style={{ width: "260px" }}>
            <img
              src={src}
              alt={`img-${i}`}
              style={{ height: heights[i % heights.length] }}
              className="w-full object-cover rounded-2xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* second swiper — offset slightly to hide reset gap */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: true, // ← optional: move opposite or same direction
        }}
        loop={true}
        allowTouchMove={false}
        className="flex items-center -mt-[350px] opacity-0 pointer-events-none"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`clone-${i}`} style={{ width: "260px" }}>
            <img
              src={src}
              alt={`img-${i}`}
              style={{ height: heights[i % heights.length] }}
              className="w-full object-cover rounded-2xl shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
