import React, { useState } from "react";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) {
      setOpen(true);
    } else if (latest < prev) {
      setOpen(false);
    }
      setIsScrolled(latest > 100);
  });

  return (
    <motion.nav
      variants={{
        hidden: { y: -100 },
        visible: { y: 0 },
      }}
      animate={open ? "hidden" : "visible"}
      transition={{
        ease: "easeInOut",
        duration: "0.25",
      }}
      className={`${isScrolled?"nav-bg":"shadow bg-transparent"} z-50 transition-colors nav-bg  py-5 px-10 fixed top-0 w-full justify-between flex items-center`}
    >
      <img src="/logo.webp" className="w-24 h-5" />

      <div className="h-12 p-1 gap-3 bg-white/10  rounded-full  flex items-center">
        <Tab name="Home" to="/" />
        <Tab name="About" to="/about" />
        <Tab name="Packages" to="/pacakges" />
        <Tab name="Contact" to="/contact" />
        <Tab name="Pages" FlyoutContent={FooterLinksSection} />
      </div>

      <BookNowButton />
    </motion.nav>
  );
}

export default Navbar;

function Tab({ name, FlyoutContent = null, to = null }) {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;
  const Wrapper = to ? NavLink : "div";
  return (
    <Wrapper
      {...(to && { to })}
      className={
        typeof to === "string"
          ? ({ isActive }) =>
              `px-3 h-full relative flex justify-center items-center  
           hover:bg-white hover:text-black transition rounded-full font-medium cursor-pointer 
           ${isActive ? "bg-white text-black" : "text-white"}`
          : `px-3 h-full relative flex justify-center items-center  
           hover:bg-white hover:text-black transition rounded-full font-medium cursor-pointer text-white`
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span>{name}</span>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ x: "-50%" }}
            className="absolute top-12  left-1/2"
          >
            <div className="absolute -top-6 left-0 right-0  h-6  "></div>
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

import { GoArrowUpRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

function BookNowButton() {
  return (
    <button className="cursor-pointer pl-5 gap-3 p-1 flex justify-between items-center  rounded-full  border text-white font-medium border-zinc-500">
      <span>Book Now</span>
      <span className="bg-white size-10 flex justify-center items-center rounded-full">
        <GoArrowUpRight className=" text-gray-400" size={25} />
      </span>
    </button>
  );
}

function FooterLinksSection() {
  return (
    <div className="bg-white shrink-0 rounded-2xl  shadow-md p-6  mx-auto">
      <div className="flex shrink-0 gap-x-12 text-gray-700 text-sm font-medium">
        {/* Column 1 */}
        <ul className="space-y-2 nowrap">
          <li className="hover:text-[#0b1c3a] cursor-pointer">Accommodation</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Gallery</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Blog</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Our Team</li>
        </ul>

        {/* Column 2 */}
        <ul className="space-y-2 text-nowrap">
          <li className="hover:text-[#0b1c3a] cursor-pointer">
            Blog Single - CMS
          </li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">
            Packages Single - CMS
          </li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">
            Accommodation Single - CMS
          </li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">FAQ</li>
        </ul>

        {/* Column 3 */}
        <ul className="space-y-2 text-nowrap">
          <li className="hover:text-[#0b1c3a] cursor-pointer">404 Not Found</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Style Guide</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Changelog</li>
          <li className="hover:text-[#0b1c3a] cursor-pointer">Licenses</li>
        </ul>
      </div>
    </div>
  );
}
