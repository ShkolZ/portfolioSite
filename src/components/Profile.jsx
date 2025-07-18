import React from "react";
import image from "../assets/profile.jpg";
import GitHubLogo from "../assets/skills/github.svg";
import LangLogo from "../assets/info/globe.svg";
import LocationLogo from "../assets/info/location.svg";
import StudentLogo from "../assets/info/student.svg";
import CakeLogo from "../assets/info/cake.svg";

function Profile() {
  return (
    <div id="profile" className="card">
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
      <div className="flex flex-wrap bg-[#0D0C0D] w-full rounded-2xl p-3 gap-5 mb-5">
        <div className="info">
          <img src={LangLogo} alt="languages" className="small-logo"></img>
          <p>English, Czech & Russian</p>
        </div>
        <div className="info">
          <img src={LocationLogo} alt="location" className="small-logo"></img>
          <p>Czechia</p>
        </div>
        <div className="info">
          <img src={StudentLogo} alt="student" className="small-logo" />
          <p>Student</p>
        </div>
        <div className="info">
          <img src={CakeLogo} alt="cake" className="small-logo" />
          <p>20y/o</p>
        </div>
      </div>
      <a href="https://github.com/ShkolZ">
        <button className="hover:cursor-pointer flex justify-center rounded-lg h-12 font-semibold w-full bg-[#1E1E1F] hover:bg-[#1E1E1F]/80 ">
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
