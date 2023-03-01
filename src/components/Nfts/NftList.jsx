import NftItem from "./NftItem";
import classes from "./NftList.module.css";
import { useEffect, useState } from "react";

const NftList = () => {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchNFT = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-nft-shop-default-rtdb.europe-west1.firebasedatabase.app/nfts.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedNFTs = [];

      for (const key in data) {
        loadedNFTs.push({
          id: key,
          img: data[key].img,
          price: data[key].price,
        });
      }
      setNfts(loadedNFTs);
      setIsLoading(false);
    };

    fetchNFT().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    })
  }, []);

  if (isLoading && !error) {
    return (
      <div className={classes.loading}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error && !isLoading) {
    return (
      <div className={classes.error}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <ul className={classes.list}>
      {nfts.map((item) => (
        <NftItem id={item.id} img={item.img} price={item.price} key={item.id} />
      ))}
    </ul>
  );
};

export default NftList;
