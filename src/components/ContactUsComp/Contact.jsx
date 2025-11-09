import { AtSign, Clock3, MapPin, PhoneCall, Sparkle } from "lucide-react";
import React from "react";
import Form from "./Form";
import AddressCard from "./AddressCard";
import NewsLetter from "./NewsLetter";

function Contact() {
  return (
    <div className=" w-full mt-28  space-y-10  bg-white ">
    <div className="px-10 space-y-10 py-24">
      <div className="  flex justify-between items-center ">
        <div className="space-y-4">
          <div className="flex gap-0.5 items-center">
            <div className="size-9 rounded-full shadow flex justify-center items-center">
              {/* Icon here */}
              <Sparkle className="text-white " size={22} fill="#0b1c3a" />
            </div>
            <div className="px-3.5 py-2 w-fit rounded-full shadow">
              Contact us
            </div>
          </div>

          <div className=" w-fit">
            <p className="text-zinc-800   text-5xl tracking-tight font-semibold">
              Need help planning your trip, <br />
              or just want to say hello.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          <img
            src="/contactAuthor.webp"
            alt="author"
            className="w-20 rounded-xl"
          />

          <p className="text-xl text-black font-medium">Clarissa Gardner</p>

          <p className="text-[#656E7F] font-medium">Founder and Tour-expert</p>
        </div>
      </div>

      <Form />

      <hr className="text-zinc-300 " />

      <div className="grid grid-cols-4 gap-6">
        <AddressCard
          title="Address"
          info="Johar Town,Lahore,Pakistan"
          icon={<MapPin className="text-gray-700 " size={30} />}
        />

        <AddressCard
          title="Phone"
          info="+92 334 4437 889"
          icon={<PhoneCall className="text-gray-700" size={24} />}
        />

        <AddressCard
          title="Email Address"
          info="name@gmail.com"
          icon={<AtSign className="text-gray-700" size={24} />}
        />

        <AddressCard
          title="Opening Hours"
          info="Monday-Friday: 9:00 AM - 6:00 PM, Saturday, Sunday: Closed"
          icon={<Clock3 className="text-gray-700" size={24} />}
        />
      </div>

</div>
      <NewsLetter />
    </div>
  );
}

export default Contact;
