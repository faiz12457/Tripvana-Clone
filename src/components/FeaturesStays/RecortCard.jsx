import { FaTree, FaBed, FaWater } from "react-icons/fa";

export default function ResortCard() {
  return (
    <div className="w-[608px] pb-2 shrink-0 relative bg-white mx-auto ">
    
      {/* Arched Image */}
      <div className="">
        <img
          src="/recort.png"
          alt="resort-img"
          className=" object-cover rounded-t-full shadow h-[342px] w-full rounded-b-2xl"
        />
      </div>

      {/*Features */}
      <div className="flex w-full justify-center absolute bottom-3 mx-auto gap-4 items-center py-4 text-green-400  font-medium">
        <div className="flex items-center gap-2">
          <img src="/jungleIcon.png"  className="size-6"/>
         <span className="text-white text-lg">  Jungle View</span>
        </div>
        <div className="flex items-center gap-2">
            <img src="/villasIcon.png"  className="size-6"/>
            <span className="text-white text-lg">  Private Villas</span>
        </div>
        <div className="flex items-center gap-2">
            <img src="/poolIcon.png"  className="size-6"/>
           <span className="text-white text-lg">   Attached Pool</span>
        </div>
      </div>



    </div>
  );
}
