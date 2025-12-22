import React from "react";

function HowWork() {
  return (
    <div
      className="
    w-full h-[1124px] bg-gray-100 mt-24 pt-32
    [clip-path:polygon(0%_0%,100%_10%,100%_100%,0%_100%)]
  "
    >
      <div className="w-full px-4 mx-auto max-w-7xl flex flex-col items-center justify-center">
        <h1 className="text-indigo-900 text-3xl font-extrabold mb-16">
          How does it work?
        </h1>

        <div className="grid grid-flow-col auto-cols-[100%] gap-4 overflow-x-auto snap-x snap-mandatory overscroll-x-contain md:grid-flow-row md:grid-cols-3 md:auto-cols-auto md:overflow-visible">
          {/* card 1 */}
          <div className="snap-start w-full md:w-[260px] lg:w-[356px] md:h-[315px] flex flex-col items-center justify-center">
            <img
              className="w-80 h-64"
              src="/images/h-1-x.webp"
              alt="h1 image"
            />

            <p className="text-indigo-950 font-bold text-2xl md:text-xl my-6">
              Choose anywhere in Europe
            </p>
            <p className="text-indigo-950 font-thin text-lg sm:text-sm text-center sm:text-left leading-6 lg:w-4/5 sm:pr-3 lg:pr-0 ">
              No more compromises! With us, you have an unrivaled selection of
              cars in one place.
            </p>
          </div>
          {/* card 2 */}
          <div className="snap-start w-full md:w-[260px] lg:w-[356px] lg:h-[340px] md:h-[300px] flex flex-col items-center justify-center">
            <img
              className="w-80 h-64"
              src="/images/h-2-x.webp"
              alt="h1 image"
            />

            <p className="text-indigo-950 font-bold text-2xl md:text-xl my-6">
              We'll inspect the car closely
            </p>
            <p className="text-indigo-950 font-thin  text-lg sm:text-sm text-center sm:text-left leading-6 lg:w-4/5 sm:pr-3 lg:pr-0">
              A certified mechanic will thoroughly inspect your car. You will
              decide according to the result after.
            </p>
          </div>
          {/* card 3 */}
          <div className="snap-start w-full md:w-[260px] lg:w-[356px] md:h-[310px] lg:h-[340px] flex flex-col items-center justify-center">
            <img
              className="w-80 h-64 hidden md:flex"
              src="/images/h-3-x.webp"
              alt="h1 image"
            />
            <img src="/images/h-3-m.webp" className="md:hidden" alt="" />

            <p className="text-indigo-950 font-bold text-2xl md:text-xl my-6">
              We'll deliver it to your home
            </p>
            <p className="text-indigo-950 font-thin text-lg sm:text-sm text-center sm:text-left leading-6 lg:w-4/5 sm:pr-3 lg:pr-0">
              We arrange all the paperwork, registration and delivery. All you
              need to do is enjoy your new car.
            </p>
          </div>
        </div>
        {/* <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible
  "
        >
          <div className="min-w-full snap-start bg-red-200 h-40 rounded-xl">
            12
          </div>
          <div className="min-w-full snap-start bg-green-200 h-40 rounded-xl" />
          <div className="min-w-full snap-start bg-blue-200 h-40 rounded-xl" />
        </div> */}
      </div>
    </div>
  );
}

export default HowWork;
