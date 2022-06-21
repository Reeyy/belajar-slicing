import React from "react";
import Box from "../assets/Free.png";
import success from "../assets/success.svg";

const CardPlan = ({ title, price, features, isSelect }) => {
  return (
    <div
      className={`border bg-white border-gray-300 rounded-md flex flex-col justify-between items-center pt-16 pb-8 ${
        isSelect ? "border-red-500" : "border-gray-300"
      } `}
    >
      <div className="  space-y-5 flex flex-col justify-center items-center">
        <img src={Box} alt="Box" className="w-24" />
        <h3 className="text-sm font-medium">{title}</h3>
        <div className=" space-y-2">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-row mr-2 items-center space-x-2"
              >
                <img src={success} alt="success" className="w-6 h-6" />
                <div>{feature}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <div className="text-center mb-4">{price}</div>
        <button
          className={`border rounded-full py-1 px-12  
            isSelect ${
              isSelect
                ? "border-red-500 bg-red-500 text-white drop-shadow-2xl"
                : "border-red-500 text-red-500 "
            }`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CardPlan;
