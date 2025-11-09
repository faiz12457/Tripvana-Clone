import React, { useState } from 'react'
import { Sparkle } from "lucide-react";
function Faq() {
  return (
    <div className='px-3'>

   
    <div className=" w-full py-24 space-y-10 px-10 rounded-3xl bg-[#F7F7F7]">

    <div className="mx-auto  flex flex-col items-center  gap-7">
        <div className="flex gap-0.5 items-center">
          <div className="size-9 rounded-full shadow flex justify-center items-center">
            {/* Icon here */}
  <Sparkle className="text-white " size={22} fill='#0b1c3a' />
        

          </div>
          <div className="px-3.5 py-2 w-fit rounded-full shadow">
            FAQ
          </div>
        </div>

        <div>
          <p className="text-black  text-center text-5xl tracking-tight font-semibold">
            Everything you need to know <br />
             was clearly answered.
          </p>
        </div>
      </div>



      <div className='flex flex-col items-center gap-4'>
        <Accordain />
        <Accordain />
        <Accordain />
      </div>


   <div className="flex justify-center ">
        <button className="bg-[#091733] cursor-pointer px-5 py-3 rounded-full text-white">
          Contact Travel Expert
        </button>
      </div>



    </div>
     </div>
  )

}

export default Faq




















import { GoPlus } from "react-icons/go";
import { motion } from 'framer-motion';

function Accordain(){
    const [show,setShow]=useState(false)
    return(
        <div className='px-6 w-[700px]  bg-white py-5 rounded-xl '>

<div className='flex justify-between w-full '>
<p className='text-xl font-medium'>How do i book a tour</p>

<span onClick={()=>setShow((prev)=>!prev)}>

        <GoPlus size={23} className={`cursor-pointer transition-all duration-300 ${show?"rotate-45":"rotate-0"} `}  />
</span>
</div>
        

        <motion.div
         animate={{
            height:show?"auto":0
         }}
         className='overflow-hidden'>
            <p className='text-base text-[#656E7F]'>You can book directly through our website 
            or request a custom itinerary. Our team will guide you step-by-step.</p>
        </motion.div>


        </div>
    )
}