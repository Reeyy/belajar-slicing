import React from "react";
import HugeGlobal from "../assets/HugeGlobal.svg";
import Discord from "../assets/sosmed/Discord.svg";
import Amazon from "../assets/sosmed/Amazon.svg";
import Netflix from "../assets/sosmed/Netflix.svg";
import Reddit from "../assets/sosmed/Reddit.svg";
import Spotify from "../assets/sosmed/Spotify.svg";
import TitleDesc from "./Title";

const Testimonials = () => {
  const icons = [Netflix, Reddit, Amazon, Discord, Spotify];
  return (
    <div className="bg-bgGray font-Rubik">
      <TitleDesc
        title={" Huge Global Network of Fast VPN"}
        desc={` See LaslesVPN everywhere to make it easier for you when you move
         
          locations.`}
      />
      <div className=" flex flex-col items-center mt-40">
        <div className="mt-26">
          <img
            src={HugeGlobal}
            alt="Huge global"
            className="w-[66rem]  h-[33rem]"
          ></img>
        </div>

        <div className=" flex flex-row space-x-9 justify-center">
          {icons.map((icon, index) => {
            return (
              <img alt={icon} key={index} src={icon} className="w-44 h-14" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
