import classes from "./HeaderBtn.module.css";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import BagContext from "../../store/bag-context";
import { useContext } from "react";

const HeaderBtn = ({ onShow }) => {
  const ctx = useContext(BagContext);

  const numberOfItems = ctx.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  return (
    <button className={classes.button} onClick={onShow}>
      <ShoppingBagIcon className={classes.icon} />
      <span>Bag</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderBtn;
