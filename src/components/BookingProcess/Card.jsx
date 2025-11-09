export function Card(){
    return (
        <div className="w-[607px] shrink-0 h-[447px] grid grid-cols-2 gap-3 rounded-2xl p-5 bg-white">

         <div className="rounded-xl flex flex-col justify-between">

        <p className="text-black font-semibold text-4xl">01</p>

        <div className="space-y-3 ">
            <p className="text-black text-2xl font-medium">Select a pakage</p>

            <p className="text-[#656E7F]">We handle all the logistics so you can relax and enjoy your journey from day one.</p>
        </div>
         </div>


         <div>
            <img src="/card.webp" className="object-cover size-full rounded-xl" />
         </div>

        </div>
    )
}