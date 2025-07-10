import React from "react";
import image from "../assets/profile.jpg";
import GitHubLogo from "../assets/github.svg";

function Profile() {
  return (
    <div id="profile" className="p-6 background main-border mb-5 rounded-2xl">
      <div className="flex  mb-5 gap-4">
        <img className="w-28 h-25 rounded-2xl" src={image} alt="Profile Pic" />
        <div className="flex flex-col justify-center gap-1">
          <div className="bg-green-900/60 rounded-3xl text-green-400 w-35 p-1 pl-2 pr-2 text-center">
            <p className="text-sm font-semibold">Available to work</p>
          </div>
          <h2 className="font-bold text-2xl text-primary">Viktor</h2>
          <h3 className="font-semibold">
            I'm a <span className="text-primary">Frontend Developer</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap body-background w-full rounded-2xl p-3  gap-5 mb-5">
        <div className="background p-2 rounded-3xl text-gray-400 font-semibold">
          <img></img>
          <p>English, Czech & Russian</p>
        </div>
        <div className="background p-2 rounded-2xl text-gray-400 font-semibold">
          <img></img>
          <p>Czechia</p>
        </div>
        <div className="background p-2 rounded-2xl text-gray-400 font-semibold">
          <p>Student</p>
        </div>
        <div className="background p-2 rounded-2xl text-gray-400 font-semibold">
          <p>20y/o</p>
        </div>
      </div>
      <a href="">
        <button className="hover:cursor-pointer hover:bg-violet-400/40 flex justify-center border-1 rounded-lg h-12 font-semibold w-full ">
          <div className="flex justify-center gap-2 items-center">
            <img
              src={GitHubLogo}
              alt="GH logo"
              className="w-[30px] h-[30px]"
            ></img>
            <p>GitHub</p>
          </div>
        </button>
      </a>
    </div>
  );
}

export default Profile;
