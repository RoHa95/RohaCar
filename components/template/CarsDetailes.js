import React from "react";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Money from "../icons/Money";
import Location from "../icons/Location";
function CarsDetailes(props) {
  const {
    id,
    name,
    model,
    year,
    distance,
    image,
    price,
    location,
    description,
  } = props;
  return (
    <div className="px-4 mx-auto max-w-4xl flex flex-col">
      <img className="w-full rounded" src={image} alt="image of car" />
      <h3 className="my-10 ml-5 text-2xl">
        {name} {model}
      </h3>
      <div className="w-full py-3 px-5 my-4 mx-0 shadow-xl">
        <div className="flex items-baseline my-3 mx-0">
          <div>
            <Company />
            <p className="ml-auto">company</p>
          </div>
          <span className="text-gray-400 ml-auto">{name}</span>
        </div>
        <div className="flex items-baseline my-3 mx-0">
          <div>
            <Model />
            <p className="ml-auto">Model</p>
          </div>
          <span className="text-gray-400 ml-auto">{model}</span>
        </div>
        <div className="flex items-baseline my-3 mx-0">
          <div>
            <Calender />
            <p className="ml-auto">first registration</p>
          </div>
          <span className="text-gray-400 ml-auto">{year}</span>
        </div>
        <div className="flex items-baseline my-3 mx-0">
          <div>
            <Road />
            <p className="ml-auto">kms driven</p>
          </div>
          <span className="text-gray-400 ml-auto">{distance}</span>
        </div>
      </div>
      <div className="w-full py-3 px-5 my-4 mx-0 shadow-xl">
        <div className="flex items-baseline my-3 mx-0">
          <div>
            <Location />
            <p className="ml-auto">location</p>
          </div>
          <span className="text-gray-400 ml-auto">{location}</span>
        </div>
      </div>
      <div className="w-full py-3 px-5 my-4 mx-0 shadow-xl">
        <p className="my-3 mx-0 text-xl font-semibold">Extra Information</p>
        <p className="text-gray-400 text-justify">{description}</p>
      </div>
      <div className="flex items-baseline my-3 mx-0">
        <div><Money/>
        <p className="ml-auto">Price : </p></div>
        
        <span className="text-gray-500 font-bold ml-auto">{price}</span>
      </div>
      <button className="w-full bg-[linear-gradient(to_right,theme(colors.indigo.900),theme(colors.indigo.500))] cursor-pointer my-3 mb-5 text-white hover:bg-indigo-500 rounded h-16 text-2xl">Buy</button>
    </div>
  );
}

export default CarsDetailes;
