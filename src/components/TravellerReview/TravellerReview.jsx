import { Sparkle } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import { ReviewCard } from "./ReviewCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionTagSecondary from "../UI/SectionTagSecondary";

function TravellerReview() {
  return (
    <div className="px-3">
      <div className=" w-full  py-24 space-y-10 px-10 bg-[#091733]  rounded-3xl">
        <div className="mx-auto  flex flex-col items-center  gap-7">
        <SectionTagSecondary text="Travelers Review" />
         

          <div>
            <p className="text-white  text-center text-2xl tracking-tight font-semibold">
              Reviews from the adventures how we've made journeys unforgettable.
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-5">
            <ReviewCard />
            <div className="overflow-hidden">
              <div className="flex gap-5">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </div>
          <div className="px-10 mt-15 flex justify-between">
            <div className=" h-px w-56 bg-white">{/* progress bar */}</div>

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
    </div>
  );
}

export default TravellerReview;




