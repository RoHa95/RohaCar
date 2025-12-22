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

        <div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible
  "
        >
          <div className="min-w-full snap-center bg-red-200 h-40 rounded-xl">
            12
          </div>
          <div className="min-w-full snap-center bg-green-200 h-40 rounded-xl" />
          <div className="min-w-full snap-center bg-blue-200 h-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default HowWork;
