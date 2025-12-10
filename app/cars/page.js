import React from "react";
import carsData from "@/data/carsData";
import AllCarsPage from "@/components/template/AllCarsPage";

function allCars() {
  return (
    <div className="flex justify-center items-center m-6 w-full">
      <AllCarsPage data={carsData} />
    </div>
  );
}

export default allCars;
