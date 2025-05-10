import React from "react";
import styles from "./Banner.module.css";

const { bgImg } = styles;

function Banner() {
  return (
    <section className={`${bgImg}  pl-25`}>
      <div className="w-[60%] space-y-12 pt-40  text-white ">
        <div className="space-y-4">
          <h1 className="font-semibold text-5xl ">Bid on Unique Items from</h1>
          <span className="font-semibold text-5xl">Around the World</span>
        </div>
        <p className="font-light text-2xl">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures
          in our curated auctions
        </p>
        <button className="mb-10 font-medium text-[#010000] text-xl bg-[#FFFFFF] rounded-4xl p-3">
          Explore Auctions
        </button>
      </div>
    </section>
  );
}

export default Banner;
