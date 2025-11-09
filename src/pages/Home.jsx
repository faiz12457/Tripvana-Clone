import React from "react";

import Layout from "../components/HOC/Layout";
import Activities from "../components/Activities/Activities";
import BookingProcess from "../components/BookingProcess/BookingProcess";
import TravelPacakages from "../components/TravelPacakages/TravelPacakages";
import Blog from "../components/Blog/Blog";
import Faq from "../components/Faq/Faq";
import TravellerReview from "../components/TravellerReview/TravellerReview";
import { HeroSection } from "../components/Home/HeroSec";


function Home() {
  return (
    <>
      <HeroSection />
      <Activities />
      <BookingProcess />
      <TravelPacakages />
      <TravellerReview />
      <Blog />
      <Faq />
    </>
  );
}

export default Layout()(Home);
