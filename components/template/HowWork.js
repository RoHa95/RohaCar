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

        <div className="flex gap-4 md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x overscroll-x-contain snap-mandatory">
          {/* card 1 */}
          <div className=" md:w-[356px] h-[340px] flex-col items-center justify-center  min-w-full md:min-w-0 snap-start scroll-ml-4">
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
          {/* card 2 */}
          <div className=" md:w-[356px] h-[340px] flex-col items-center justify-center min-w-full md:min-w-0 snap-start scroll-ml-4">
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
          {/* card 3 */}
          <div className=" md:w-[356px] h-[340px] flex-col items-center justify-center min-w-full md:min-w-0 snap-start scroll-ml-4">
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
