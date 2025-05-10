import { useState } from "react";
import "./App.css";
import Auctions from "./components/Auctions/Auctions";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const fetchPromise = fetch("BidItems.json").then((res) => res.json());

function App() {
  const [items, setItems] = useState([]);

  const handleItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  return (
    <>
      <Header></Header>

      {/* <Auctions
        items={items}
        handleItem={handleItem}
        fetchPromise={fetchPromise}
      ></Auctions> */}
      <Footer>Some child content</Footer>
    </>
  );
}

export default App;
