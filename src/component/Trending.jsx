import React from "react";
import { Link } from "react-router-dom";
const Trending = () => {
  return (
    <div className="bg-gray-500 w-[300px] px-3 mx-4 flex flex-col gap-3 pb-3 pt-5">
      <h3 className="text-[20px] font-semibold text-center">Trending songs</h3>
      {[0, 1, 2, 3, 4].map((item, i) => (
        <div
          key={i}
          className="bg-white flex items-center px-3 py-1 justify-between rounded-md"
        >
          <h3>Unavailable by Davido</h3>
          <h3 className="font-bold text-[20px]">+</h3>
        </div>
      ))}
      <div className="flex justify-center">
        <Link className="bg-[#ff9900] p-2 rounded-md">View more</Link>
      </div>
    </div>
  );
};

export default Trending;
