import classes from "./BagItem.module.css";

const BagItem = ({ img, price, quantity, onAdd, onRemove }) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-info"]}>
        <img src={img} />
        <div>
          <span>
            Price: <span>${price}</span>
          </span>
          <span>
            Qty: <span>{quantity}x</span>
            <span className={classes["add-btn"]} onClick={onAdd}>
              +
            </span>
          </span>
        </div>
      </div>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default BagItem;
