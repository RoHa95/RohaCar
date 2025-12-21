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
        <div className="flex items-center justify-between w-full">
          <div className=" w-[356px] h-[340px] flex-col items-center justify-center">
            <img
              className="w-80 h-64"
              src="/images/h-1-x.webp"
              alt="h1 image"
            />
            <p className="text-indigo-950 font-bold text-2xl my-6">
              Choose anywhere in Europe
            </p>
            <p className="text-indigo-950 font-thin text-sm leading-6 w-4/5">
              No more compromises! With us, you have an unrivaled selection of
              cars in one place.
            </p>
          </div>
          <div className=" w-[356px] h-[340px] flex-col items-center justify-center">
            <img
              className="w-80 h-64"
              src="/images/h-2-x.webp"
              alt="h1 image"
            />
            <p className="text-indigo-950 font-bold text-2xl my-6">
              We'll inspect the car closely
            </p>
            <p className="text-indigo-950 font-thin text-sm leading-6 w-4/5">
              A certified mechanic will thoroughly inspect your car. You will
              decide according to the result after.
            </p>
          </div>
          <div className=" w-[356px] h-[340px] flex-col items-center justify-center">
            <img
              className="w-80 h-64"
              src="/images/h-3-x.webp"
              alt="h1 image"
            />
            <p className="text-indigo-950 font-bold text-2xl my-6">
              We'll deliver it to your home
            </p>
            <p className="text-indigo-950 font-thin text-sm leading-6 w-4/5">
              We arrange all the paperwork, registration and delivery. All you
              need to do is enjoy your new car.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
