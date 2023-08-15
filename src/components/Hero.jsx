import React from "react";
import { data } from "../data/data.js";

const Hero = () => {
  const { image: doubleChessBurger } = data[2];
  return (
    <div className="max-w-[1224px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          className="w-full max-h-[400px] object-cover"
          src={doubleChessBurger}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
