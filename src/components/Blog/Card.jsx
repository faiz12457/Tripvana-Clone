export function Card() {
  return (
    <div className=" space-y-4 group  rounded-xl cursor-pointer  bg-white">
      <div className="overflow-hidden rounded-xl relative">
        <img
          src="/travel.png "
          className="rounded-xl group-hover:scale-110
         transition-transform duration-700 object-cover h-80 w-full"
        />

        <div className="absolute top-4 left-4  flex items-center  gap-4">
          <button
            className="bg-black cursor-pointer  rounded-full px-4
          py-2  text-white text-[.9rem] 
           flex justify-center items-center z-10 "
          >
            September 6, 2025
          </button>

          <span className="text-white">3 min read</span>
        </div>
      </div>

      <p className="text-xl font-medium">How We Design Intentional Travel</p>

      <p className="text-base text-[#656E7F]">
        From private islands to sky lodges explore travel that’s both exclusive
        and unforgettable.
      </p>

      <button className="px-5 cursor-pointer py-3 rounded-full font-medium border border-gray-300">
        Read Article
      </button>
    </div>
  );
}