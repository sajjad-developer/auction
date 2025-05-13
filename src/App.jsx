import { Suspense, use, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";

const fetchPromise = async () => {
  const res = await fetch("/BidItems.json");
  return res.json();
};
function App() {
  const receivedPromise = fetchPromise();

  const [addedItems, setAddedItem] = useState([]);

  const [addedBidPrice, setAddedBidPrice] = useState(0);

  const handleItem = (addedItem) => {
    const newAddedItems = [...addedItems, addedItem];
    setAddedItem(newAddedItems);
    const newBidPrice = addedBidPrice + addedItem.currentBidPrice;
    setAddedBidPrice(newBidPrice);
  };

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Items are coming....</h1>}>
        <Auctions
          receivedPromise={receivedPromise}
          handleItem={handleItem}
          addedItems={addedItems}
          addedBidPrice={addedBidPrice}
        ></Auctions>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
