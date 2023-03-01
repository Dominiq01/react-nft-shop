import { useContext } from "react";
import BagContext from "../../store/bag-context";
import classes from "./NftItem.module.css";

const NftItem = ({ id, img, price }) => {
  const ctx = useContext(BagContext);

  const addToBagHandler = () => {
    ctx.addItem({
      id,
      img,
      price,
      quantity: 1,
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.photo}>
        <img src={img} alt="nft picture" />
        <div className={classes.description}>
          <div className={classes.price}>
            <div className={classes["price-tag"]}>Price</div>
            <div className={classes.amount}>$ {price}</div>
          </div>
          <span className={classes["btn-container"]}>
            <button className={classes.button} onClick={addToBagHandler}>
              Add to bag
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default NftItem;
