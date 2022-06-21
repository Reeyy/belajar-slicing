import React from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  const menus = ["About", "Features", "Pricing", "Testimonial", "Help"];
  return (
    <div className="bg-white font-Rubik">
      <nav className="container   max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon-laslesvpn" src={Logo} className="w-36" />

        <div className="flex-1 ">
          <ul className="flex flex-row space-x-6">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  className="text-navbar cursor-pointer"
                  to={menu}
                  smooth={true}
                  offset={200}
                  duration={600}
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className="font-bold  text-navbarsignin ">Sign In</button>
          <button className=" px-6 py-2 text-navbarsignout border border-red-600  font-red-200 rounded-full">
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
