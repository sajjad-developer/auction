import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { PiWarningCircleFill } from "react-icons/pi";

function FavoriteItems({ addedItems, addedBidPrice, handleDeleteItems }) {
  return (
    <section className="rounded-box favorite-items bg-base-100 text-center space-y-2 px-10 mt-20 mb-15">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="flex justify-center items-center gap-4 ">
                <AiFillHeart className="text-[40px] text-red-500"></AiFillHeart>
                <h1 className="text-3xl font-bold">Favorite Items</h1>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {addedItems.length > 0 ? (
            addedItems.map((addedItem) => (
              <tr key={addedItem.id} className="flex flex-col">
                <td className="flex justify-between text-center  text-xl font-bold items-center">
                  <h2> {addedItem.title}</h2>

                  <h2>
                    <RxCross2
                      onClick={() => {
                        handleDeleteItems(
                          addedItem.id,
                          addedItem.currentBidPrice,
                          addedItems
                        );
                        toast(
                          <h1 className="lg:mx-4 text-red-500 ">
                            <div className="flex gap-2 justify-center items-center">
                              <PiWarningCircleFill className="text-[20px]" />
                              Item deleted from Favorite Items
                            </div>
                          </h1>
                        );
                      }}
                      size={25}
                    />
                  </h2>
                </td>
                <td className="text-xl font-bold">
                  ${addedItem.currentBidPrice}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <div className="text-center font-normal text-xl">
                  <p>No favorites yet</p>
                  <p>
                    click the heart icon on any item <br /> to add it to your
                  </p>
                </div>
              </td>
            </tr>
          )}
          <tr>
            <td>
              <div className="space-x-5 font-medium text-2xl">
                <span>Total bids Amount</span>
                <span className="font-bold">
                  ${addedBidPrice ? addedBidPrice : "0000"}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default FavoriteItems;
