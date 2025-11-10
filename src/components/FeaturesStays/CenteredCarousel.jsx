import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ResortCard from "./RecortCard";

export const CenteredCarousel = forwardRef(({ resorts,onSlideChange }, ref) => {
  const swiperRef = useRef(null);
  useImperativeHandle(ref, () => ({
    slideNext: () => swiperRef.current?.slideNext(),
    slidePrev: () => swiperRef.current?.slidePrev(),
  }));

  return (
    <div className="w-full py-16 relative bg-white overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSlideChange={(swiper) => onSlideChange?.(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2} // show center + peek sides
        centeredSlides={true} // ✅ keep active slide centered
        loop={true} // ✅ infinite loop
        spaceBetween={0} // ✅ no bar between slides
        navigation={false} // hide arrows (can enable later)
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {resorts.map((resort, i) => (
            
          <SwiperSlide key={i} className="flex justify-center  items-center">
              <ResortCard {...resort}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
