import React from "react";
import Location from "../icons/Location";
function Card(props) {
  const { id, name, model, year, distance, image, price, location } = props;
  console.log(props);

  return (
    <div className="w-fit rounded overflow-hidden p-3 m-4">
      <img src={image} className="w-[300px] rounded" />
      <h4 className="mx-3 my-0">{`${name} ${model}`}</h4>
      <p className="text-sm text-gray-400 mx-1 my-0">{`${year} ${distance}`}</p>
      <div className="flex justify-between my-5 ">
        <p className="text-orange-500 px-1 py-2 rounded text-sm font-bold">
          {price} $
        </p>
        <div className="flex items-end">
          <p className="mr-1">{location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Card;
