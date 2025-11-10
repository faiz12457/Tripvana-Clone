import { Sparkle } from "lucide-react";
import React from "react";





function SectionTag({text }) {
  return (
    <div className="flex gap-0.5 items-center">
      <div className="size-9 rounded-full shadow flex justify-center items-center">
        {/* Icon here */}
        <Sparkle className="text-white " size={22} fill="#0b1c3a" />
      </div>
      <div className="px-3.5 py-2 w-fit rounded-full shadow">{text}</div>
    </div>
  );
}

export default SectionTag;
