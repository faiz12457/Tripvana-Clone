import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-3 my-3">
    <div className="bg-[#0b1c3a] flex flex-col h-screen text-white p-10 rounded-3xl">


    <div className="flex justify-between">
 {/* Left Section */}
     <div>
           <img src="/logo.webp" className="w-24 h-5" />
          <p className="text-gray-300 text-sm mb-6 mt-3">
            Explore the world with confidence,<br />
            comfort & crafted experiences.
          </p>

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-200 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#122242] flex items-center justify-center">
                <FaFacebookF className="text-white text-sm" />
              </div>
              <span>Facebook</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-gray-200 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#122242] flex items-center justify-center">
                <FaInstagram className="text-white text-sm" />
              </div>
              <span>Instagram</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-gray-200 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#122242] flex items-center justify-center">
                <FaLinkedinIn className="text-white text-sm" />
              </div>
              <span>Linkedin</span>
            </a>
          </div>
        </div>


        <div className="flex gap-25">
  {/* Main Pages */}
 <div>
          <h2 className="font-semibold mb-3 text-white">Main Pages</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Packages</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Book Now</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>



         {/* More Pages */}
        <div>
          <h2 className="font-semibold mb-3 text-white">More Pages</h2>
          <ul className="space-y-2 text-gray-300 ">
            <li>Package Single</li>
            <li>Privacy Policy</li>
            <li>Tour Experts</li>
            <li>Blog Single</li>
            <li>Blog</li>
          </ul>
        </div>

 {/* Utility Pages */}
        <div>
          <h2 className="font-semibold mb-3 text-white">Utility Pages</h2>
          <ul className="space-y-2 text-gray-300 text-base mb-6">
            <li>404 Error Page</li>
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licenses</li>
          </ul>
          <button className="bg-white cursor-pointer text-[#0b1c3a]  font-semibold px-5 py-3 rounded-full hover:bg-gray-100">
            More Templates
          </button>
        </div>


        </div>


    </div>
      

      {/* Bottom Footer */}
      <div className=" mt-auto pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-base">
        <p>
          © Rights reserved by <span className="text-white">Tripvana</span> - Powered by{" "}
          <span className="text-white">Webflow</span>
        </p>
        <p>
          Design and developed by{" "}
          <span className="text-white">Pixoora</span>
        </p>
      </div>
    </div>
    </footer>
  );
}
