import React from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

function InformationBox() {
  return (
    <div className=" bg-indigo-900 w-full p-3 pb-8">
      <div className=" bg-gray-200 rounded-lg flex-col md:flex md:flex-row md:items-center md:justify-between overflow-hidden">
        <div className=" flex items-center p-6 w-full justify-between border-b md:border-r cursor-pointer border-gray-400 border-0">
          <div>
            <div className=" flex items-center text-base font-bold gap-x-3 cursor-pointer text-gray-700">
              <FaMoneyBillTransfer className="text-2xl" />
              Money back guarantee
            </div>
            <div className="hidden md:flex text-sm text-gray-600 py-3 pl-8">
              If you don't fall in love with the vehicle, simply return it to
              us.
            </div>
          </div>

          <div className=" md:hidden text-indigo-500">
            <FaPlusCircle />
          </div>
        </div>
        <div className=" flex items-center p-6 w-full justify-between border-b md:border-r cursor-pointer border-gray-400 border-0">
          <div>
            <div className=" flex items-center text-base font-bold gap-x-3 cursor-pointer text-gray-700">
              <RiSecurePaymentLine className="text-2xl" />
              Safe purchase
            </div>
            <div className="hidden md:flex text-sm text-gray-600 py-3 pl-8">
              We guarantee the technical condition of every vehicle sold.
            </div>
          </div>

          <div className=" md:hidden text-indigo-500">
            <FaPlusCircle />
          </div>
        </div>
        <div className=" flex items-center p-6 justify-between w-full border-b cursor-pointer border-gray-400 border-0">
          <div>
            <div className=" flex items-center text-base font-bold gap-x-3 cursor-pointer text-gray-700">
              <MdVerifiedUser className="text-2xl" />
              6-month warranty
            </div>
            <div className="hidden md:flex text-sm text-gray-600 py-3 pl-8">
              In addition, with every car you receive an extended warranty.
            </div>
          </div>

          <div className=" md:hidden text-indigo-500">
            <FaPlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationBox;
