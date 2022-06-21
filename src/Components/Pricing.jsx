import React from "react";
import CardPlan from "./CardPlan";
import TitleDesc from "./Title";

const packages = [
  {
    title: "Free Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    price: "Free",
  },
  {
    title: "Standard Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    price: "$9/mo",
  },
  {
    title: "Premium Plan",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    price: "$12/mo",
  },
];
const Pricing = () => {
  return (
    <div id="Pricing" className="bg-bgGray font-Rubik">
      <TitleDesc
        title={"Choose Your Plan"}
        desc={`Let's choose the package that is best for you and explore it 
        happily and
        cheerfully.`}
      />

      <div className="grid grid-cols-3 space-x-6  px-40">
        {packages.map((packageItem, index) => {
          return (
            <CardPlan
              key={index}
              {...packageItem}
              isSelect={index + 1 === packages.length}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
