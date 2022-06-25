import React from "react";
import StartIcon from "../assets/start.svg";

export const CardReview = ({ name, address, comment, isSelect, star, id }) => {
  return (
    <div
      className={`border ${
        isSelect ? "border-red-500" : "border-gray-300"
      } rounded-lg p-5 w-96 h-52`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-5">
          <img
            src="https://images.unsplash.com/photo-1656057339655-786cadf701a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="w-10 h-10 rounded-full"
            alt="test"
          />
          <div>
            <div>{name}</div>
            <div>{address}</div>
          </div>
        </div>
        <div className="flex flex-row items-center  space-x-2">
          <div>{star}</div>
          <img src={StartIcon} alt={name} className="w-3 h-3" />
        </div>
      </div>
      <div className="mt-5">{comment}</div>
    </div>
  );
};
