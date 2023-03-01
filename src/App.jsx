import { useState } from "react";
import Bag from "./components/Bag/Bag";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import NftList from "./components/Nfts/NftList";
import BagCtxProvider from "./store/BagCtxProvider";

function App() {
  const [isBagVisible, setIsBagVisible] = useState(false);

  const bagVisibilityHandler = () => {
    setIsBagVisible(!isBagVisible);
  };
  return (
    <BagCtxProvider>
      {isBagVisible && <Bag onClose={bagVisibilityHandler} />}
      <Header onShow={bagVisibilityHandler} />
      <Description />
      <NftList />
    </BagCtxProvider>
  );
}

export default App;
