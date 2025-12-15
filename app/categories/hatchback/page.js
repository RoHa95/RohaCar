import React from "react";
import carsData from "@/data/carsData";
import Card from "@/components/module/Card";

function Hatchback() {
  const result = carsData.filter((item) => item.category === "hatchback");
  console.log(result);

  return (
    <div className="flex flex-col md:flex md:flex-row mx-auto w-full md:justify-start items-center justify-center overflow-auto">
      {result.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default Hatchback;
