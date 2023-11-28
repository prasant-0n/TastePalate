import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5, Video } from "../assets";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
// import ReactPlayer from "react-player";
export default function Header({ title, type, image }) {
  return (
    <div className="w-full h-[100vh] ">
      <div className="relative w-full h-full">
        <img
          src={image || images[Math.floor(Math.random() * images.length)]}
          alt="Header_image"
          className="w-full h-full object-cover"
        />
        {/* <ReactPlayer
          className="video-background"
          url={Video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
        /> */}
      </div>
      <div
        className=" absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-4
       flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4"
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center -mt-80">
          {" "}
          {title}
        </h1>
        {type && (
          <p className=" text-lg mt-4 text-center text-green-400">
            Welcome to TastyPalate, Your Passport to culinary Adventures!{" "}
            <br className="hidden md:'block" />
            Discover a treasure trove of delectable recipes from around the
            globe.
          </p>
        )}
      </div>
    </div>
  );
}
