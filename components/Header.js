import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";

function Header() {
  return (
    <div className="sticky h-16 w-full border-0 border-b-2 border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="  flex w-full items-center justify-between h-16 px-4 max-w-7xl lg:mx-auto">
        <div className=" flex items-center justify-start  w-fit h-full gap-x-2">
          <IoIosMenu className=" lg:hidden font-bold text-2xl text-gray-600 cursor-pointer" />
          <h1 className="italic font-bold text-xl text-indigo-700 ml-4">
            <Link href={"/"} replace>
            RoHaCar
            </Link>
            
          </h1>
          <ul className="lg:flex items-center justify-start font-medium gap-x-4 text-sm ml-4 text-gray-700 hidden ">
            <li className="hover:text-indigo-700 hover:underline hover:underline-offset-[6px] decoration-indigo-700 decoration-2 cursor-pointer">
              Buy
            </li>
            <li className="hover:text-indigo-700 hover:underline hover:underline-offset-[6px] decoration-indigo-700 decoration-2 cursor-pointer">
              How it works
            </li>
            <li className="hover:text-indigo-700 hover:underline hover:underline-offset-[6px] decoration-indigo-700 decoration-2 cursor-pointer">
              Reviews
            </li>
            <li className="hover:text-indigo-700 hover:underline hover:underline-offset-[6px] decoration-indigo-700 decoration-2 cursor-pointer">
              Services
            </li>
            <li className="hover:text-indigo-700 hover:underline hover:underline-offset-[6px] decoration-indigo-700 decoration-2 cursor-pointer">
              About us
            </li>
          </ul>
        </div>
        <div className=" flex items-center justify-en gap-x-3 text-gray-600">
          <FaRegHeart className=" cursor-pointer hover:bg-gray-100 p-2 text-4xl" />
          <LuShoppingCart className=" cursor-pointer hover:bg-gray-100 p-2 text-4xl" />
          <MdOutlineAccountCircle className=" cursor-pointer hover:bg-gray-100 p-2 text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
