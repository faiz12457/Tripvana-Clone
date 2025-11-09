import { FaStar } from "react-icons/fa";


export function TestimonialCard() {
  return (
    <div className="bg-[#122242] shrink-0 flex flex-col text-white p-6 rounded-xl h-[460px] w-96 shadow-md">
      {/* Star Rating */}
      <div className="flex text-[#ffffff] mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-[#ffffff] text-xl" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-100 text-2xl font-medium  mb-5">
        We booked our honeymoon to <span className="font-medium">Bali</span>
        through this agency, and it was best decision ever. From luxurious
        resort to sunset dinners every detail was handled perfectly.
      </p>

      {/* Author */}
      <p className="text-xl font-medium text-gray-300  mt-auto">
        Ravi &amp; Nisha Shankar
      </p>
    </div>
  );
}