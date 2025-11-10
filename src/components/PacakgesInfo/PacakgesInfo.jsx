import { Sparkle } from 'lucide-react'
import React from 'react'
import { Card } from './Card';
import ButtonPrimary from '../UI/ButtonPrimary';
import SectionTag from '../UI/SectionTag';


function PacakgesInfo() {
      const [activeTab,setActiveTab]=React.useState("All");
  
      const tabs=["All","Honeymoon","Seasonal Tours","Family Tours","Adventure"]
         
  return (
    <div className=" w-full mt-28 py-24 space-y-10 px-10 bg-white">


 <div className="mx-auto  flex flex-col items-center  gap-7">
        <SectionTag
            text={"Packages"}
      
          />
      

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
      tabs.map((tab)=>{
        return <ButtonPrimary 
        onclick={()=>setActiveTab(tab)}
        className={`${activeTab===tab?"bg-[#091733]":"bg-[#f8f8f8] text-black!"}`}>
            {tab}
    </ButtonPrimary>
      })
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