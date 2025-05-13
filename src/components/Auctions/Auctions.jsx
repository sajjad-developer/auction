import { use } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import Auction from "../Auction/Auction";

import FavoriteItems from "../FavoriteItems/FavoriteItems";

function Auctions({ receivedPromise, handleItem, addedItems, addedBidPrice }) {
  const auctionsItems = use(receivedPromise);

  return (
    <section className="auctions bg-blue-50 sora  ">
      <h1 className="pt-20 pl-20 text-[#0E2954] font-bold text-3xl">
        Active Auctions
      </h1>
      <p className="mt-4 font-normal text-xl text-[#000000] pl-20">
        Discover and bid on extraordinary items
      </p>
      <div className="flex gap-8">
        <div className="w-[60%] bg-blue-200  rounded-box ml-20   mt-20 mb-15 ">
          <table className="table  rounded-box text-center text-xl ">
            <thead className="text-2xl font-bold">
              <tr>
                <th>Items</th>
                <th></th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>

            {auctionsItems.map((auctionItem) => (
              <Auction key={auctionItem.id}>
                <tr>
                  <td>
                    <img
                      className="block w-40 mx-auto rounded-box"
                      src={auctionItem.image}
                      alt="auction item displayed"
                    />
                  </td>
                  <td>{auctionItem.title}</td>
                  <td>${auctionItem.currentBidPrice}</td>
                  <td>{auctionItem.timeLeft}</td>
                  <td>
                    <AiOutlineHeart
                      className="text-[40px]"
                      onClick={() => {
                        handleItem(auctionItem);
                        <AiFillHeart className="text-red-500" />;
                      }}
                    />
                  </td>
                </tr>
              </Auction>
            ))}
          </table>
        </div>
        <FavoriteItems addedItems={addedItems} addedBidPrice={addedBidPrice} />
      </div>
    </section>
  );
}

export default Auctions;
