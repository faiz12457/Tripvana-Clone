import React from "react";
import ButtonPrimary from "../UI/ButtonPrimary";

function Form() {
  const fields = [
    { label: "Name*", type: "text", placeholder: "Your Name" },
    { label: "Email*", type: "text", placeholder: "name@gmail.com" },
    { label: "Phone*", type: "text", placeholder: "+92 334 4437 889" },
    { label: "Number of travellers*", type: "text", placeholder: "3 Person" },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <div className="col-span-1   rounded-xl">
        {/* Image */}

        <img
          src="/map.webp"
          alt="map-image"
          className="rounded-xl object-cover"
        />
      </div>

      <form className="col-span-2 space-y-4   p-10 bg-[#F7F7F7]  rounded-xl">
        <div className="grid grid-cols-2  gap-x-4 gap-y-5">
          {fields.map(({ label, type, placeholder }) => (
            <div className="space-y-1">
              <label className="font-medium block uppercase text-sm">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                className="px-5 py-4 bg-white outline-none border placeholder:font-medium border-zinc-200 w-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* text area */}
        <div className="space-y-1 ">
          <label className="font-medium block uppercase text-sm">
            Special notes*
          </label>
          <textarea
            placeholder="Write your message here"
            rows={5}
            className="px-5 py-4 bg-white outline-none border placeholder:font-medium border-zinc-200 w-full rounded-lg"
          />
        </div>

        {/* button */}

        <ButtonPrimary type="submit">Send Message</ButtonPrimary>
      </form>
    </div>
  );
}

export default Form;
