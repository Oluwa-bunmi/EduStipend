import React from "react";
import { Link } from "react-router-dom";
const Input = () => {
  return (
    <div className="flex items-center m-4 justify-between border border-gray-500 p-3 rounded-md sm:gap-6">
      <input
        type="text"
        className="w-[100px] outline-none bg-transparent sm:w-[700px]"
      />
      <div className="flex items-center gap-[10px] sm:gap-5">
        <Link className="whitespace-nowrap">Contact us</Link>
        <Link className="bg-[#ff9900] px-[10px] py-2 rounded-md sm:px-8">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Input;
