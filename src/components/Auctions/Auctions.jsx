import React, { use } from "react";
import Auction from "../Auction/Auction";
import FavoriteItems from "../FavoriteItems/FavoriteItems";

function Auctions({ fetchPromise, handleItem, items }) {
  const promise = use(fetchPromise);

  return (
    <section className=" bg-blue-50 sora">
      <h1 className="pt-20 pl-20 text-[#0E2954] font-bold text-3xl">
        Active Auctions
      </h1>
      <p className="mt-4 font-normal text-xl text-[#000000] pl-20">
        Discover and bid on extraordinary items
      </p>
      <div className="flex gap-10 ">
        <table className="table table-auto  overflow-hidden rounded-xl border border-base-content/5 bg-base-100  ml-20 mt-10 mb-20">
          <thead>
            <tr className="text-[#000000]">
              <th className="text-center p-6">Items</th>
              <th className="text-center"></th>
              <th className="text-center">Current Bid</th>
              <th className="text-center">Time Left</th>
              <th className="text-center">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {promise.map((auction) => (
              <Auction
                handleItem={handleItem}
                key={auction.id}
                auction={auction}
              ></Auction>
            ))}
          </tbody>
        </table>
        <FavoriteItems items={items}></FavoriteItems>
        {console.log(items)}
      </div>
    </section>
  );
}

export default Auctions;
