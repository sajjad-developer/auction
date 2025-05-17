import { Suspense, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const fetchPromise = async () => {
  const res = await fetch("/BidItems.json");
  return res.json();
};
function App() {
  const receivedPromise = fetchPromise();

  const [addedItems, setAddedItem] = useState([]);

  const [addedBidPrice, setAddedBidPrice] = useState(0);

  const [favoriteIconIds, setFavoriteIconIds] = useState([]);

  const handleItem = (addedItem) => {
    const newAddedItems = [...addedItems, addedItem];
    setAddedItem(newAddedItems);
    const newBidPrice = addedBidPrice + addedItem.currentBidPrice;
    setAddedBidPrice(newBidPrice);
  };

  const handleDeleteItems = (id, BidPrice, addedItems) => {
    const idIndex = addedItems.findIndex((addedItem) => addedItem.id === id);
    if (idIndex !== -1) {
      const itemsBeforeIdIndex = addedItems.slice(0, idIndex);
      const itemsAfterIdIndex = addedItems.slice(idIndex + 1);
      const updatedItems = [...itemsBeforeIdIndex, ...itemsAfterIdIndex];
      setAddedItem(updatedItems);
    }

    const remainingItemsPrice = addedBidPrice - BidPrice;
    setAddedBidPrice(remainingItemsPrice);
  };

  const handleFavoriteIconIds = (id) => {
    if (favoriteIconIds.includes(id)) {
      const remainingFavoriteIconIds = favoriteIconIds.filter(
        (favoriteIconId) => favoriteIconId !== id
      );
      setFavoriteIconIds(remainingFavoriteIconIds);
    } else {
      const addedFavoriteIconIds = [...favoriteIconIds, id];
      setFavoriteIconIds(addedFavoriteIconIds);
    }
    // show toast popup
  };

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="absolute inset-0 top-145 flex  justify-center items-center">
            <span className="loading loading-bars loading-xl text-green-500"></span>
          </div>
        }
      >
        <Auctions
          receivedPromise={receivedPromise}
          handleItem={handleItem}
          addedItems={addedItems}
          addedBidPrice={addedBidPrice}
          handleDeleteItems={handleDeleteItems}
          handleFavoriteIconIds={handleFavoriteIconIds}
          favoriteIconIds={favoriteIconIds}
        ></Auctions>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
