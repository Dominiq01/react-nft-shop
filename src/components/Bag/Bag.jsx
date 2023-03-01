import classes from "./Bag.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useContext, useState } from "react";
import BagContext from "../../store/bag-context";
import BagItem from "./BagItem";
import Checkout from "./Checkout";
import SuccessModal from "./SuccessModal";

const Bag = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ctx = useContext(BagContext);

  const removeAllHandler = () => {
    ctx.removeAll();
  }

  const bagItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const bagItemAddHandler = (item) => {
    ctx.addItem({
      ...item,
      quantity: 1,
    });
  };

  const numberOfItems = ctx.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  const toCheckoutHandler = () => {
    setIsSubmitted(true);
  }

  const bagItems = ctx.items.map((item) => (
    <BagItem
      key={item.id}
      img={item.img}
      price={item.price}
      onAdd={bagItemAddHandler.bind(null, item)}
      onRemove={bagItemRemoveHandler.bind(null, item.id)}
      quantity={item.quantity}
    />
  ));

  if(isSuccess) {
    return (
      <Modal onClose={onClose}>
        <SuccessModal/>
      </Modal>
    )
  }

  return (
    <>
      <Modal onClose={onClose}>
        {isSubmitted ? <Checkout onSuccess={setIsSuccess}/> : <div className={classes.bag}>
          <div className={classes.info}>
            <div>
              <h2>Your bag</h2>
              <span className={classes["items-num"]}>
                Items <span>{numberOfItems}</span>
              </span>
            </div>
            <span className={classes.remove} onClick={removeAllHandler}>Remove all</span>
          </div>
          {bagItems.length === 0 ? (
            <p className={classes.empty}>
              Currently no NFT's in your bag. Please add some.
            </p>
          ) : (
            <ul className={classes.list}>{bagItems}</ul>
          )}
          <div className={classes["price-info"]}>
            <h3>Total price</h3>
            <span>$ {ctx.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            {bagItems.length > 0 && <Button onClick={toCheckoutHandler}>Go to checkout</Button>}
            <Button className={classes["btn--alt"]} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>}
      </Modal>
    </>
  );
};

export default Bag;
