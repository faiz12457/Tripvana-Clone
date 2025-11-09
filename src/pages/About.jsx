import React from "react";
import Layout from "../components/HOC/Layout";
import Team from "../components/Team/Team";
import Blog from "../components/Blog/Blog";
import AboutInfo from "../components/AboutInfo/AboutInfo";
import VideoSec from "../components/VideoSec/VideoSec";

function About() {
  return (
    <div>
      <HeroSec />
      <AboutInfo />
      <Team />
      <Blog />
    </div>
  );
}

export default Layout()(About);

function HeroSec() {
  return (
    <div
      className='h-screen relative bg-black flex justify-center  
     bg-[url("/aboutImg.png")] bg-cover bg-no-repeat bg-center'
    >
      <div className="  text-gray-100 space-y-4 mt-auto mb-24 ">
        <h1 className="text-6xl text-center font-semibold">
          We design intentional <br />
          travel experiences
        </h1>

        <p className="text-xl font-medium text-center">
          From handpicked destinations to seamless logistics, our mission is to
          make <br />
          every journey personal, meaningful, and unforgettable.
        </p>
      </div>
    </div>
  );
}
