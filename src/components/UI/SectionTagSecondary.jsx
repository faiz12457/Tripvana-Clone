import { Sparkle } from 'lucide-react'
import React from 'react'

function SectionTagSecondary({text=""}) {
  return (
    <div className="flex gap-0.5 items-center text-white">
            <div className="size-9 rounded-full border border-gray-700 flex justify-center items-center">
              {/* Icon here */}
              <Sparkle className="text-[#0b1c3a] " size={18} fill="#fff" />
            </div>
            <div className="px-3.5 py-2 w-fit rounded-full border border-gray-700">
              {text}
            </div>
          </div>
  )
}

export default SectionTagSecondary