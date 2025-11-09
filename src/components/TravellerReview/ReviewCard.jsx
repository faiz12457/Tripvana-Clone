
import { FaStar } from "react-icons/fa";
export function ReviewCard() {
  return (
    <div className="w-96 h-[460px] shrink-0 bg-[#122242] rounded-2xl p-6 flex flex-col justify-between text-white shadow-md">
      {/* Top Section */}
      <div>
        <h1 className="text-5xl font-semibold mb-3">5.0</h1>
        <p className="text-gray-200 leading-relaxed text-[15px]">
          Discover how we've helped travelers create memories that last a
          lifetime.
        </p>
      </div>

      {/* Middle Section */}
      <div>
        <h2 className="text-lg font-semibold mb-3 mt-6">Pixooadvisor</h2>

        {/* Avatars */}
        <div className="flex items-center mb-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user1"
            className="w-8 h-8 rounded-full border-2 border-[#122242] ml-0"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user2"
            className="w-8 h-8 rounded-full border-2 border-[#122242] -ml-2"
          />
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="user3"
            className="w-8 h-8 rounded-full border-2 border-[#122242] -ml-2"
          />
          <img
            src="https://randomuser.me/api/portraits/women/49.jpg"
            alt="user4"
            className="w-8 h-8 rounded-full border-2 border-[#122242] -ml-2"
          />
          <span className="ml-2 text-gray-300 text-sm font-medium">55+</span>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 text-gray-200 mb-6">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-sm" />
            ))}
          </div>
          <p className="text-sm text-gray-400">Trusted by Pixooadvisor</p>
        </div>
      </div>

      {/* Button */}
      <button className="bg-white text-[#122242] font-semibold py-2 rounded-full hover:bg-gray-100 transition-all">
        Leave a Review
      </button>
    </div>
  );
}