import React from "react";

function Card() {
  return (
    <div className="w-[397px] shrink-0 flex px-4 h-[399px] overflow-hidden group rounded-xl relative">
    <img src="/employee.webp" className="absolute group-hover:scale-110 transition-transform duration-500  inset-0 rounded-xl " />
      <GuideCard />
    </div>
  );
}

export default Card;

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function GuideCard({
  name = "Annie Benson",
  role = "Expert-Travel Guide",
  facebook = "#",
  linkedin = "#",
  instagram = "#",
}) {
  return (
    <div className="bg-white  px-5 py-4 z-10 mt-auto mb-4
      rounded-2xl shadow-sm p-4 flex w-full
      justify-between items-center ">
      {/* Left side - name and role */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>

      {/* Right side - social icons */}
      <div className="flex gap-3 text-gray-700">
        <a
          href={facebook}
          aria-label="Facebook"
          className="hover:text-blue-600"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href={linkedin}
          aria-label="LinkedIn"
          className="hover:text-blue-700"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href={instagram}
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
          <FaInstagram size={18} />
        </a>
      </div>
    </div>
  );
}
