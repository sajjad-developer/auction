import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FavoriteItems({ items }) {
  const [favorites, setFavorites] = useState([]); // Initially empty favorites state

  const handleAddFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]); // Add item to favorites
      toast.success("Item added to favorites"); // Show toast notification
    } else {
      toast.info("Item is already in your favorites"); // Show info if item is already added
    }
  };

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites); // Remove item from favorites
    toast.success("Item removed from favorites"); // Show toast notification
  };

  const hasItems = favorites && favorites.length > 0;

  return (
    <aside className="w-[45%] text-center overflow-hidden rounded-xl border border-base-content/5 bg-base-100 mb-20 mt-10 mr-10">
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>
              <div className="flex justify-center items-center gap-2 mt-10 mb-10">
                <CiHeart size={35} />
                <h1 className="text-[#0E2954] font-medium text-[32px]">
                  Favorite Items
                </h1>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="text-left">
                    <div className="flex justify-center items-center">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {favorites.some((fav) => fav.id === item.id) ? (
                        <TiDeleteOutline
                          size={35}
                          onClick={() => handleRemoveFavorite(item.id)} // Remove favorite
                          className="cursor-pointer"
                        />
                      ) : (
                        <CiHeart
                          size={35}
                          onClick={() => handleAddFavorite(item)} // Add to favorites
                          className="cursor-pointer text-red-500"
                        />
                      )}
                    </div>

                    <p className="text-sm text-gray-500">
                      {item.timeLeft} left
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-right text-[18px] font-medium">
                ${item.currentBidPrice}
              </td>
            </tr>
          ))}

          {!hasItems && (
            <tr>
              <td colSpan={2}>
                <div className="space-y-2">
                  <h2 className="text-2xl font-medium text-black">
                    No favorites yet
                  </h2>
                  <p className="text-[18px] text-black">
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              </td>
            </tr>
          )}

          <tr>
            <td colSpan={2}>
              <div className="flex justify-between text-black mt-4">
                <h2 className="text-[22px] font-normal">Total bids Amount</h2>
                <h2 className="text-[22px] font-medium">
                  $
                  {hasItems
                    ? favorites.reduce(
                        (sum, item) => sum + item.currentBidPrice,
                        0
                      )
                    : "0000"}
                </h2>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer /> {/* Render the ToastContainer */}
    </aside>
  );
}

export default FavoriteItems;
