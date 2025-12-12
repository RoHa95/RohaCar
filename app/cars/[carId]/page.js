import React from "react";
import carsData from "@/data/carsData";
import CarsDetailes from "@/components/template/CarsDetailes";

async function CarDeataile({ params }) {
  const { carId } = await params;
  console.log(carId);
  const carDeatails = carsData[carId - 1];
  console.log(carDeatails);

  return <CarsDetailes {...carDeatails} />;
}

export default CarDeataile;
