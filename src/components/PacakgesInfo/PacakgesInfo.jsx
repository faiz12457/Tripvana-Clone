import { Sparkle } from 'lucide-react'
import React from 'react'
import { Card } from './Card';


function PacakgesInfo() {
      const [activeTab,setActiveTab]=React.useState("All");
  
      const tabs=["All","Honeymoon","Seasonal Tours","Family Tours","Adventure"]
         
  return (
    <div className=" w-full mt-28 py-24 space-y-10 px-10 bg-white">


 <div className="mx-auto  flex flex-col items-center  gap-7">
        <div className="flex gap-0.5 items-center">
          <div className="size-9 rounded-full shadow flex justify-center items-center">
            {/* Icon here */}
            <Sparkle className="text-white " size={22} fill="#0b1c3a" />
          </div>
          <div className="px-3.5 py-2 w-fit rounded-full shadow">
             Packages
          </div>
        </div>

        <div>
          <p className="text-zinc-800  text-center text-5xl tracking-tight font-semibold">
            Discover travel packages to suit <br />
             every type of explorer from solo <br />
              wanderers to families
          </p>
        </div>
      </div>


      <div className=' flex gap-2  w-fit mx-auto'>
    {
        tabs.map((activity)=>(
            <button onClick={()=>setActiveTab(activity)} className={`px-4 py-3 rounded-full cursor-pointer 
             text-black ${activeTab===activity?"bg-[#091733] text-white":"bg-[#f8f8f8]"}`}>
             {activity}
            </button>
        ))
    }
     
    </div>



    <div className='grid grid-cols-2 gap-12 px-25'>
<Card />
<Card />
<Card />
<Card />
    </div>







    </div>
  )
}

export default PacakgesInfo