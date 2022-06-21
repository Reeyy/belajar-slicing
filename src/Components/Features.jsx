import React from "react";
import checkList from "../assets/checklist.svg";
import Illustration2 from "../assets/Illustration2.svg";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN.",
  "No specific time limits.",
];

const Features = () => {
  return (
    <div id="Features" className="Features scroll-smooth">
      <div className="grid grid-cols-2 pl-44 pt-20 font-Rubik">
        <img
          src={Illustration2}
          alt="Illustration2"
          className="w-[30rem] h-[25rem]"
        />
        <div className="mt-16 mr-44">
          <div className="font-medium text-4xl  ">
            We Provide Many <br /> Features You Can Use
          </div>
          <div className="pt-5 font-normal text-sm text-navbar">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <div className="pt-5">
            {features.map((feature, index) => {
              return (
                <div
                  key={index + 1}
                  className="flex flex-row  items-center space-x-2 text-navbar pt-5"
                >
                  <img src={checkList} className="w-6 h-6" alt="cheklist" />
                  <div className="text-xs">{feature}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
