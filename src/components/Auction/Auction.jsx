import React from "react";
import { CiHeart } from "react-icons/ci";

function Auction({ auction, handleItem }) {
  const {
    id,
    title,
    description,
    currentBidPrice,
    timeLeft,
    bidsCount,
    image,
  } = auction;
  return (
    <tr className="text-[#0E2954]">
      <td className="w-32 ">
        <img src={image} className="object-cover" alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${currentBidPrice}</td>
      <td className="text-center">{timeLeft}</td>
      <td className="w-32 text-center">
        <button onClick={() => handleItem(auction)}>
          <CiHeart size={35} />
        </button>
      </td>
    </tr>
  );
}

export default Auction;
