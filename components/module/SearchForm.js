import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

function SearchForm() {
  return (
    <>
      <div className="relative lg:static lg:max-h-[116px] overflow-visible">
        <div className="absolute -bottom-20 md:-bottom-10 left-0 lg:top-16 lg:left-0 lg:max-h-[450px] lg:px-5 lg:py-12 w-full overflow-visible">
          <div className=" lg:hidden w-full h-14 bg-[linear-gradient(to_top,theme(colors.indigo.900),transparent)] "></div>
          <div className="max-w-7xl px-4 lg:mx-auto bg-indigo-900 lg:bg-transparent">
            <h1 className="lg:text-4xl text-3xl font-bold bg-indigo-900 lg:bg-transparent text-white p-3">
              You choose your car online.
              <br /> We inspect it and deliver it.
            </h1>
            <form
              action=""
              className="hidden lg:grid grid-cols-6 gap-3 bg-white w-3/5 p-4 rounded-lg"
            >
              <select
                value="model"
                className="border  col-start-1 col-span-4 h-10 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
              >
                <option name="audi" id="1">
                  Audi
                </option>
                <option name="bmw" id="2">
                  BMW
                </option>
                <option name="bugatti" id="3">
                  Bugatti
                </option>
                <option name="Ferrari" id="4">
                  Ferrari
                </option>
              </select>

              <select
                name="mileage"
                id="mileage"
                className=" col-span-2 border h-10 rounded-lg border-gray-400 px-2 text-gray-500"
              >
                <option value="2500">2500</option>
                <option value="2500">5000</option>
                <option value="2500">6500</option>
                <option value="2500">10000</option>
              </select>
              <select
                name="year"
                id="year"
                className=" col-span-2 h-10 border rounded-lg border-gray-400 px-2 text-gray-500"
              >
                <option value="2005">2005</option>
              </select>

              <select
                name="price up"
                id="priceup"
                className=" col-span-2 border h-10 rounded-lg border-gray-400 px-2 text-gray-500"
              >
                <option value="50000">50000</option>
                <option value="70000">70000</option>
                <option value="100000">100000</option>
                <option value="150000">150000</option>
                <option value="200000">200000</option>
              </select>
              <div className=" col-span-2 flex items-center gap-x-2">
                <input type="checkbox" name="vat" id="vat" />
                <label htmlFor="vat">VAT deducation</label>
              </div>

              <button className=" col-span-2 col-start-5 h-12 rounded-lg text-white font-bold bg-[linear-gradient(to_right,theme(colors.indigo.900),theme(colors.indigo.500))] hover:bg-indigo-500">
                1 006 907 offers
              </button>
              <div className="flex items-center row-start-3 col-span-2">
                <p className="text-indigo-800 font-bold text-sm underline underline-offset-4 hover:no-underline cursor-pointer">
                  Advenced search
                </p>
                <IoIosArrowForward />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* only mobile view */}
      <div className=" bg-indigo-900 p-3">
        <form
          action=""
          className="w-full lg:hidden lg:flex-col grid grid-cols-6 gap-y-3 gap-x-3 mt-20 bg-white rounded-lg px-3 py-4 "
        >
          <select
            value="model"
            className=" border w-full h-10 col-span-full md:col-start-1 md:col-span-4 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option
              name="audi"
              id="1"
              className="text-gray-400 px-2 rounded-lg"
            >
              Audi
            </option>
            <option name="bmw" id="2">
              BMW
            </option>
            <option name="bugatti" id="3">
              Bugatti
            </option>
            <option name="Ferrari" id="4">
              Ferrari
            </option>
          </select>

          <select
            className=" border col-start-1 col-span-3 md:col-start-5 md:col-span-2 h-10 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
            name="mileage"
            id="mileage"
          >
            <option value="2500">2500</option>
            <option value="2500">5000</option>
            <option value="2500">6500</option>
            <option value="2500">10000</option>
          </select>
          <select
            name="year"
            id="year"
            className=" border h-10 col-start-4 col-span-3 md:col-start-1 md:col-span-2 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option value="2005">2005</option>
          </select>

          <select
            name="price up"
            id="priceup"
            className="border  h-10 col-start-1 col-span-3 md:col-span-2 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option value="50000">50000</option>
            <option value="70000">70000</option>
            <option value="100000">100000</option>
            <option value="150000">150000</option>
            <option value="200000">200000</option>
          </select>
          <div className=" flex col-start-4 col-span-3 gap-x-2 md:col-span-2 items-center ">
            <input className="" type="checkbox" name="vat" id="vat" />
            <label htmlFor="vat" className="text-gray-500">
              VAT deducation
            </label>
          </div>

          <button className="w-full col-span-full cursor-pointer md:col-start-5 md:col-span-2 md: h-12 rounded-lg text-white font-bold bg-[linear-gradient(to_right,theme(colors.indigo.900),theme(colors.indigo.500))] hover:bg-indigo-500">
            1 006 907 offers
          </button>
          <div className="flex col-span-full md:row-start-3 md:col-start-1 md:col-span-2 items-center justify-center md:justify-start">
            <p className="text-indigo-800 font-bold text-sm underline underline-offset-4 hover:no-underline cursor-pointer">
              Advenced search
            </p>
            <IoIosArrowForward />
          </div>
        </form>
      </div>
      {/* end mobile view */}
    </>
  );
}

export default SearchForm;
