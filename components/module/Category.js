import React from "react";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";
import Link from "next/link";

function Category() {
  return (
    <div className="mx-auto px-4 max-w-7xl mb-8">
      <h3 className="text-4xl text-indigo-900 font-bold my-8"> Categories</h3>
      <div className=" mx-auto overflow-x-scroll max-w-7xl flex gap-x-3 items-center justify-between">
        <Link href={"/categories/sedan"}>
          <div className="border border-gray-300 flex flex-col items-center justify-center rounded-xl w-52 h-40 hover:bg-indigo-100 cursor-pointer">
            <p className="text-indigo-900 text-center font-bold">Sedan</p>

            <Sedan className="w-32 h-28 text-indigo-900" />
          </div>
        </Link>

        <Link href={"/categories/suv"}>
          <div className="border border-gray-300 flex flex-col items-center justify-center rounded-xl w-52 h-40 hover:bg-indigo-100 cursor-pointer">
            <p className="text-indigo-900 text-center font-bold">SUV</p>
            <Suv className="w-32 h-28 text-indigo-900" />
          </div>
        </Link>
        <Link href={"/categories/hatchback"}>
          <div className="border border-gray-300 flex flex-col items-center justify-center rounded-xl w-52 h-40 hover:bg-indigo-100 cursor-pointer">
            <p className="text-indigo-900 text-center font-bold">Hatchback</p>
            <Hatchback className="w-32 h-28 text-indigo-900" />
          </div>
        </Link>
        <Link href={"/categories/sport"}>
          <div className="border border-gray-300 flex flex-col items-center justify-center rounded-xl w-52 h-40 hover:bg-indigo-100 cursor-pointer">
            <p className="text-indigo-900 text-center font-bold">Sport</p>
            <Sport className="w-32 h-28 text-indigo-900" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
