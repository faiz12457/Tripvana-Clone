import React from "react";

function NewsLetter() {
  return (
    <div className="px-3">
      <div className="rounded-3xl bg-gray-50  py-24">
        <div className="mx-auto  w-sm flex items-center gap-4 flex-col">
          <p className="text-xl font-medium">
            Subscribe to Our Travel Newsletter
          </p>

          <input
            type='text'
            placeholder='info@mail.com'
            className="px-5 py-4 bg-white outline-none border
             placeholder:font-medium border-zinc-200 w-full rounded-lg"
          />

          <button className="px-5 w-full cursor-pointer py-3 bg-[#091733] rounded-full text-white">

            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
