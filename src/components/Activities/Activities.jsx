import React from 'react'

function Activities() {

    const [activeTab,setActiveTab]=React.useState("All");

    const tabs=["All","Adventure","Cultural","Relaxation","Wildlife"]
       
  return (
    <div className='w-full  bg-white px-10 '>

    
        <div className='mx-auto  flex flex-col items-center py-24 gap-7'>

       <div className='flex gap-0.5 items-center'>
       <div className='size-9 rounded-full shadow flex justify-center items-center'>
         {/* Icon here */}
             <Sparkle className="text-white " size={22} fill='#0b1c3a' />
       </div>
       <div className='px-3.5 py-2 w-fit rounded-full shadow'>
        Our Tour Activities
       </div>


       </div>

       <div>
        <p className='text-zinc-800  text-center text-5xl tracking-tight font-semibold'>
         Whether you seek adventure, <br />
culture, or calm — we’ve got the <br />
perfect experience for every kind <br/>
of traveler.

        </p>
       </div>

        </div>
    


<div>
    {/* Activities content  */}


    <div className=' flex gap-2  w-fit mx-auto'>
    {
        tabs.map((activity)=>(
            <button onClick={()=>setActiveTab(activity)} className={`px-4 py-3 rounded-full cursor-pointer 
             text-black ${activeTab===activity?"bg-[#091733] text-white":"bg-[#f8f8f8]"}`}>
             {activity}
            </button>
        ))
    }
     
    </div>


    <TrueInfiniteSwiper />

</div>

    </div>
  )
}

export default Activities




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Sparkle } from 'lucide-react';

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


