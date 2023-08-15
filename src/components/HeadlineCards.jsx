import React from "react";
import { categories, data } from "../data/data.js";

const HeadlineCards = () => {
  const { image } = data[9];
  const card1Image =
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
  return (
    <div className="max-w-[1224px] mx-auto p-4 py-12 sm:grid-cols-2 grid md:grid-cols-3 gap-6">
      {/* Card */}

      {[0, 1, 2].map((value) => (
        <div key={value} className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4 ">
              Sun's Out. BOGO's Out
            </p>
            <p className="px-2">Through 8/26</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img className="object-cover w-full" src={card1Image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
