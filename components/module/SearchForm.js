"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchForm() {
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const selectHandler = (event) => {
    // console.log(event.target.value);
    setModel(event.target.value);
    // console.log(model);
  };
  const mileageHandler = (event) => {
    // console.log(event.target.value);
    setMileage(event.target.value);
    // console.log(mileage);
  };
  const yearHandler = (event) => {
    // console.log(event.target.value);
    setYear(event.target.value);
    // console.log(year);
  };
  const priceHandler = (event) => {
    // console.log(event.target.value);
    setPrice(event.target.value);
    // console.log(price);
  };

  const buttonHandler = () => {
    const newModel = model || "all";
    const newMileage = mileage || "all";
    const newYear = year || "all";
    const newPrice = price || "all";

    // console.log(newModel, newMileage, newYear, newPrice);

    if (!model && !mileage && !year && !price) {
      router.push("/cars");
    } else {
      router.push(`/filter/${newModel}/${newMileage}/${newYear}/${newPrice}`);
    }
  };
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
              onSubmit={(e) => e.preventDefault()}
              action=""
              className="hidden lg:grid grid-cols-6 gap-3 bg-white w-3/5 p-4 rounded-lg"
            >
              <select
                value={model}
                onChange={selectHandler}
                className="border  col-start-1 col-span-4 h-10 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
              >
                <option
                  disabled
                  value=""
                  className="text-gray-400 px-2 rounded-lg"
                  id="0"
                >
                  Name Or Model
                </option>
                <option
                  value="audi"
                  className="text-gray-600 px-2 rounded-lg"
                  id="1"
                >
                  Audi
                </option>
                <option
                  value="bmw"
                  className="text-gray-600 px-2 rounded-lg"
                  id="2"
                >
                  BMW
                </option>
                <option
                  value="Dodge"
                  className="text-gray-600 px-2 rounded-lg"
                  id="3"
                >
                  Dodge
                </option>
                <option
                  value="Volkswagen"
                  className="text-gray-600 px-2 rounded-lg"
                  id="4"
                >
                  Volkswagen
                </option>
                <option
                  value="Mercedes-Benz"
                  className="text-gray-600 px-2 rounded-lg"
                  id="5"
                >
                  Mercedes-Benz
                </option>
                <option
                  value="Maserati"
                  className="text-gray-600 px-2 rounded-lg"
                  id="6"
                >
                  Maserati
                </option>
              </select>

              <select
                name="mileage"
                value={mileage}
                onChange={mileageHandler}
                id="mileage"
                className=" col-span-2 border h-10 rounded-lg border-gray-400 px-2 text-gray-500"
              >
                <option value="" disabled>
                  Mileage
                </option>
                <option value="2500">2500</option>
                <option value="5000">5000</option>
                <option value="6500">6500</option>
                <option value="10000">10000</option>
                <option value="15000">15000</option>
              </select>

              <input
                type="number"
                onChange={yearHandler}
                placeholder="Registration from"
                value={year}
                className=" col-span-2 h-10 border rounded-lg border-gray-400 px-2 text-gray-500 placeholder-gray-500"
              />
              <select
                onChange={priceHandler}
                value={price}
                className=" col-span-2 border h-10 rounded-lg border-gray-400 px-2 text-gray-500"
              >
                <option value="" disabled>
                  Price up to
                </option>
                <option value="50000">50000</option>
                <option value="70000">70000</option>
                <option value="100000">100000</option>
                <option value="150000">150000</option>
                <option value="200000">200000</option>
              </select>

              <button
                onClick={buttonHandler}
                className=" col-span-2 row-start-3 col-start-5 h-12 rounded-lg text-white font-bold bg-[linear-gradient(to_right,theme(colors.indigo.900),theme(colors.indigo.500))] hover:bg-indigo-500"
              >
                offers
              </button>
              {/* <div className="flex items-center row-start-3 col-span-2">
                <p className="text-indigo-800 font-bold text-sm underline underline-offset-4 hover:no-underline cursor-pointer">
                  Advenced search
                </p>
                <IoIosArrowForward />
              </div> */}
            </form>
          </div>
        </div>
      </div>
      {/* only mobile view */}
      <div className=" bg-indigo-900 p-3">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="w-full lg:hidden lg:flex-col grid grid-cols-6 gap-y-3 gap-x-3 mt-20 bg-white rounded-lg px-3 py-4 "
        >
          <select
            value={model}
            onChange={selectHandler}
            className=" border w-full h-10 col-span-full md:col-start-1 md:col-span-4 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option value="" className="text-gray-400 px-2 rounded-lg" id="0">
              Name Or Model
            </option>
            <option
              id="1"
              value="Audi"
              className="text-gray-400 px-2 rounded-lg"
            >
              Audi
            </option>
            <option
              className="text-gray-400 px-2 rounded-lg"
              value="bmw"
              id="2"
            >
              BMW
            </option>
            <option
              className="text-gray-400 px-2 rounded-lg"
              value="Dodge"
              id="3"
            >
              Dodge
            </option>
            <option
              className="text-gray-400 px-2 rounded-lg"
              value="Volkswagen"
              id="4"
            >
              Volkswagen
            </option>
            <option
              className="text-gray-400 px-2 rounded-lg"
              value="Mercedes-Benz"
              id="5"
            >
              Mercedes-Benz
            </option>
            <option
              className="text-gray-400 px-2 rounded-lg"
              value="Maserati"
              id="6"
            >
              Maserati
            </option>
          </select>

          <select
            className=" border col-start-1 col-span-3 md:col-start-5 md:col-span-2 h-10 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
            value={mileage}
            onChange={mileageHandler}
            id="mileage"
          >
            <option value="" disabled>
              Mileage
            </option>
            <option value="2500">2500</option>
            <option value="5000">5000</option>
            <option value="6500">6500</option>
            <option value="10000">10000</option>
            <option value="15000">15000</option>
          </select>
          {/* <select
            name="year"
            id="year"
            className=" border h-10 col-start-4 col-span-3 md:col-start-1 md:col-span-2 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option value="2005">2005</option>
          </select> */}
          <input
            type="number"
            onChange={yearHandler}
            placeholder="Registration from"
            value={year}
            // className=" col-span-2 h-10 border rounded-lg border-gray-400 px-2 text-gray-500 placeholder-gray-500"
            className=" border h-10 col-start-4 col-span-3 md:col-start-1 md:col-span-2 rounded-lg placeholder-gray-500 border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          />
          {/* <select
            onChange={priceHandler}
            value={price}
            className=" col-span-2 border h-10 rounded-lg border-gray-400 px-2 text-gray-500"
          >
            <option value="" disabled>
              Price up to
            </option>
            <option value="50000">50000</option>
            <option value="70000">70000</option>
            <option value="100000">100000</option>
            <option value="150000">150000</option>
            <option value="200000">200000</option>
          </select> */}
          <select
            onChange={priceHandler}
            value={price}
            className="border  h-10 col-start-1 col-span-3 md:col-span-2 rounded-lg border-gray-400 px-2 text-gray-500 focus:border-gray-400 "
          >
            <option value="" disabled>
              Price up to
            </option>
            <option value="50000">50000</option>
            <option value="70000">70000</option>
            <option value="100000">100000</option>
            <option value="150000">150000</option>
            <option value="200000">200000</option>
          </select>
          {/* <div className=" flex col-start-4 col-span-3 gap-x-2 md:col-span-2 items-center ">
            <input className="" type="checkbox" name="vat" id="vat" />
            <label htmlFor="vat" className="text-gray-500">
              VAT deducation
            </label>
          </div> */}

          <button
            onClick={buttonHandler}
            className="w-full col-span-full cursor-pointer md:col-start-5 md:col-span-2 md: h-12 rounded-lg text-white font-bold bg-[linear-gradient(to_right,theme(colors.indigo.900),theme(colors.indigo.500))] hover:bg-indigo-500"
          >
            offers
          </button>
          {/* <div className="flex col-span-full md:row-start-3 md:col-start-1 md:col-span-2 items-center justify-center md:justify-start">
            <p className="text-indigo-800 font-bold text-sm underline underline-offset-4 hover:no-underline cursor-pointer">
              Advenced search
            </p>
            <IoIosArrowForward />
          </div> */}
        </form>
      </div>
      {/* end mobile view */}
    </>
  );
}

export default SearchForm;
