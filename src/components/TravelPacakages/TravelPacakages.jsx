import { Sparkle } from "lucide-react";
import React, { useState } from "react";
import { Card } from "./Card";
import SectionTag from "../UI/SectionTag";

function TravelPacakages() {
  return (
    <div className=" w-full py-24 space-y-10 px-10 bg-white">
      <div className="mx-auto  flex flex-col items-center  gap-7">
        <SectionTag
          text={"Travel Packages"}
        />

        <div>
          <p className="text-zinc-800  text-center text-5xl tracking-tight font-semibold">
            Curated tour packages designed <br />
            for every kind of traveler — from <br />
            beach lovers to mountain <br />
            explorers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default TravelPacakages;
