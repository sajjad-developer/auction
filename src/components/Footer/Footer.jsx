import React from "react";

function Footer({ test }) {
  return (
    <section className="sora bg-[#FFFFFF] h-80 space-y-6 flex flex-col justify-center items-center">
      {/* left part */}
      <div className="flex justify-center items-center font-bold text-4xl">
        <h1 className="text-[#003EA4] ">
          Auction<span className="text-[#FFD337]">Gallery</span>
        </h1>
      </div>
      {/* middle part */}
      <div className="sora flex gap-7 justify-center items-center font-normal text-2xl text-[#000000]">
        <a href="">Bid</a>
        <a href="">Win</a>
        <a href="">Own</a>
      </div>
      <div className="poppins flex gap-7 justify-center items-center font-normal text-2xl text-[#000000]">
        <a href="">Home</a>
        <a href="">Auctions</a>
        <a href="">Categories</a>
        <a href="">How to works</a>
      </div>
      <h1 className="sora font-normal text-xl text-[#000000]">
        © 2025 AuctionHub. All rights reserved.
      </h1>
    </section>
  );
}

export default Footer;
