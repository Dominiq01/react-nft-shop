import metamaskIcon from "../../assets/metamask.svg";
import venlyIcon from "../../assets/venly.svg";
import phantomIcon from "../../assets/phantom.svg";
import trustIcon from "../../assets/trust.png";
import coinbaseIcon from "../../assets/coinbase.png";
import classes from "./Checkout.module.css";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import BagContext from "../../store/bag-context";

const Checkout = ({onSuccess}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [selected, setSelected] = useState("");
  const ctx = useContext(BagContext);
  const fee = ctx.totalAmount * 0.008;

  const submitHandler = (e) => {
    e.preventDefault();
    setIsTouched(true);

    if(selected === '') {
      return;
    }
    ctx.removeAll();
    setIsTouched(false);
    onSuccess(true);
  };

  const listItems = [
    { img: metamaskIcon, text: "Metamask" },
    { img: trustIcon, text: "Trust Wallet" },
    { img: coinbaseIcon, text: "Coinbase Wallet" },
    { img: phantomIcon, text: "Phantom" },
    { img: venlyIcon, text: "Venly" },
  ];

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>Checkout</h2>
      <p>Choose your wallet:</p>
      <ul className={classes.list}>
        {listItems.map((item) => (         
          <li key={item.text} className={selected === item.text ? `${classes["wallet-item"]} ${classes.selected}` : `${classes["wallet-item"]}`} onClick={() => {setSelected(item.text); setIsTouched(true)}}>
            <img src={item.img} />
            {item.text}
          </li>
        ))}
      </ul>
      {(selected === '' && isTouched) && <p className={classes.error}>You must choose wallet!</p>}
      <p className={classes.summary}>Summary:</p>
      <div className={classes.info}>
        <span>Total</span>
        <span className={classes.total}>$ {ctx.totalAmount}</span>
      </div>
      <div className={classes.info}>
        <span>Network fee</span>
        <span>$ {fee.toFixed(2)}</span>
      </div>
      <Button type="submit">Confirm Purchase</Button>
    </form>
  );
};

export default Checkout;
