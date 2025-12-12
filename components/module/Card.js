import React from "react";
import Location from "../icons/Location";
import Link from "next/link";
function Card(props) {
  const { id, name, model, year, distance, image, price, location } = props;
  console.log(props);

  return (
    <Link href={`/cars/${id}`}>
     <div className="w-fit h-90 flex flex-col justify-between  rounded overflow-hidden p-3 m-4 shadow-xl hover:bg-indigo-50 hover:shadow-2xl">
      <>
       <img src={image} className="w-[300px] rounded" />
      <h4 className="mx-3 my-0">{`${name} ${model}`}</h4>
      <p className="text-sm text-gray-400 mx-1 my-0">{`${year} ${distance}`}</p>
      </>
     
      <div className="flex justify-between items-center my-5 ">
        <p className="text-indigo-500  px-1 py-2 rounded text-sm font-bold">
          {price} $
        </p>
        <div className="flex  text-gray-500 items-end">
          <p className="mr-1">{location}</p>
          <Location />
        </div>
      </div>
    </div>
    </Link>
   
  );
}

export default Card;
