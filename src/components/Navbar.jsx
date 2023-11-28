import React, { useState } from "react";
import { ImgLogo } from "../assets";
// import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import ButtonStyle from "./ButtonStyle";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between ">
        <a
          href="/"
          className="flex items-center justify-between text-white text-lg cursor-pointer"
        >
          <img src={ImgLogo} alt="logo" className="w-22 h-12 lg:w-30 lg:h-20" />
        </a>
        <ul className="hidden md:flex text-white gap-6 ">
          <li className="hover:text-gray-500 duration-500" href="/">
            Home
          </li>
          <li className="hover:text-gray-500 duration-500" href="/">
            Expolre
          </li>
          <li className="hover:text-gray-500 duration-500" href="/">
            Faborites
          </li>
          <li className="hover:text-gray-500 duration-500" href="/"></li>
        </ul>

        <ButtonStyle
          title="Subscribe"
          containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px] duration-500"
        />
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${
          open ? "flex" : "hidden"
        } bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
      >
        <a href="/">Home</a>
        <a href="/#recipes">Recipes</a>
        <a href="/">Favorites</a>
        <ButtonStyle
          title="Subscribe"
          containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px] duration-500"
        />
      </div>
    </header>
  );
}
