import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function RateStar() {
  return (
     <div className="bg-indigo-900 flex items-center justify-center gap-x-4 md:pt-10 pt-3 pb-10 ">
            <p className="text-xl text-white font-bold">4.8</p>
            <div className="flex text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className="flex items-center text-white row-start-3 col-span-2">
              <p className="text-white font-bold text-sm hover:underline hover:underline-offset-4 no-underline cursor-pointer">
                1894 reviews
              </p>
              <IoIosArrowForward />
            </div>
          </div>
  )
}

export default RateStar