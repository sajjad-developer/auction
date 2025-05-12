import { Suspense, use, useEffect } from "react";
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

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Items are coming....</h1>}>
        <Auctions receivedPromise={receivedPromise}></Auctions>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
