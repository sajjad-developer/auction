import React from "react";
import "./Navbar.css";
import profilePicture from "../../../assets/icons/Avatar.svg";

function Navbar() {
  return (
    <section className="navbar poppins flex justify-around bg-gradient-to-r mask-b-from-orange-50 mask-b-to-orange-200">
      {/* left part */}
      <div className="flex justify-center items-center font-bold text-4xl">
        <h1 className="text-[#003EA4] ">
          Auction<span className="text-[#FFD337]">Gallery</span>
        </h1>
      </div>
      {/* middle part */}
      <div className="flex gap-7 justify-center items-center font-normal text-2xl">
        <a href="">Home</a>
        <a href="">Auctions</a>
        <a href="">Categories</a>
        <a href="">How to works</a>
      </div>
      {/* right part */}
      <div className="flex justify-center items-center gap-7">
        <button className="btn btn-ghost btn-circle bg-gray-100">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs bg-gray-300 indicator-item text-gray-800">
              9
            </span>
          </div>
        </button>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Profile Picture" src={profilePicture} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
