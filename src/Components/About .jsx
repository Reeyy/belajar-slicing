import React from "react";
import Illustration1 from "../assets/Illustration1.png";
import user from "../assets/user.svg";
import Location from "../assets/location.svg";
import Server from "../assets/Server.svg";

const About = () => {
  const abouts = [
    {
      id: 1,
      icon: user,
      label: "User",
      total: "90+",
    },

    {
      id: 2,
      icon: Location,
      label: "Location",
      total: "90+",
    },

    {
      id: 3,
      icon: Server,
      label: "Server",
      total: "30+",
    },
  ];

  return (
    <div id="About" className="scroll-smooth">
      <main className=" max-w-5xl  container  mx-auto font-Rubik ">
        <div className="grid grid-cols-2">
          <div className="pt-52">
            <h1 className="text-4xl font-bold pb-5">
              Want anything to be easy
              <br />
              with LaslesVPN.
            </h1>
            <div className="text-xs font-normal pb-12 ">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </div>

            <button className="rounded-xl  py-4 px-16 bg-buttonred text-white drop-shadow-3xl">
              Get Strated Now
            </button>
          </div>
          <div className="pl-12 w-[38.5rem] pt-44">
            <img alt="ilustration1" src={Illustration1} />
          </div>
        </div>
        <div className="grid grid-cols-3  mt-28 shadow-2xl rounded-lg py-4 -px-1 ">
          {abouts.map((about, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4 space-x-6  justify-center ${
                  index + 1 !== abouts.length && "border-r-2 border-['#EEEFF2']"
                }`}
              >
                <div className="rounded-full p-3">
                  <img
                    alt={about.label}
                    className="w-12 h-12"
                    src={about.icon}
                  />
                </div>
                <div className="mt-3">
                  <div className="font-bold text-2xl">{about.total}</div>
                  <div className="font-normal text-xl">{about.label}</div>
                </div>
                {/* <div className="border-l-2 border-['#EEEFF2'] h-24 "></div> */}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default About;
