export function Card() {
  return (
    <div className="space-y-4  group   rounded-xl cursor-pointer  bg-white">
      <div className="overflow-hidden rounded-xl relative">
        <img
          src="/travel.png "
          className="rounded-xl group-hover:scale-110
         transition-transform duration-700 object-cover h-80 w-full"
        />

        <button
          className="bg-black cursor-pointer top-4 right-4 rounded-full px-4
          py-2 absolute text-white text-base font-medium
           flex justify-center items-center z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        >
          Booking Open
        </button>
      </div>

      <div className="flex justify-between">
        <p className="text-2xl font-medium">Swiss Alps Explorer</p>

        <div className="px-3.5 py-2 text-[#091733] text-base font-medium rounded-full border border-gray-200 w-fit">
          <span>$13,500</span> /<span>5Days</span>
        </div>
      </div>

      <p className="text-xl text-[#656E7F]">
        Experience breathtaking alpine views, scenic train rides, and cozy
        mountain stays.
      </p>

      <button className="px-5 cursor-pointer py-3 rounded-full font-medium border border-gray-300">
        Book Tour Now
      </button>
    </div>
  );
}