import { useReducer } from "react";
import BagContext from "./bag-context";

const defaultBagState = {
  items: [],
  totalAmount: 0,
}

const bagReducer = (state, action) => {
  if(action.type === "ADD_TO_BAG") {
    const changedAmount = state.totalAmount + action.item.price;
    const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingBagItem = state.items[existingItemIndex];

    let updatedItem;
    let updatedItems;

    if(existingBagItem) {
      updatedItem = {
        ...existingBagItem,
        quantity: existingBagItem.quantity + action.item.quantity
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = [...state.items, updatedItem];
    }

    return {
      items: updatedItems,
      totalAmount: changedAmount,
    }
  } else if(action.type === "REMOVE_FROM_BAG") {
    const itemToRemoveIndex = state.items.findIndex((item) => item.id === action.id);
    const itemToRemove = state.items[itemToRemoveIndex];
    const changedAmount = state.totalAmount - itemToRemove.price;
    
    let updatedItems;

    if(itemToRemove.quantity > 1) {
      const updatedItem = {
        ...itemToRemove,
        quantity: itemToRemove.quantity - 1
      }
      updatedItems = [...state.items];
      updatedItems[itemToRemoveIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    
    return {
      items: updatedItems,
      totalAmount: changedAmount,
    }

  } else if(action.type === "REMOVE_ALL_FROM_BAG") {
    return defaultBagState;
  }
  return defaultBagState;
}

const BagCtxProvider = ({children}) => {
  const [bagState, dispatch] = useReducer(bagReducer, defaultBagState);

  const addItemHandler = (item) => {
    dispatch({type: "ADD_TO_BAG", item: item});
  }

  const removeItemHandler = (id) => {
    dispatch({type: "REMOVE_FROM_BAG", id: id});
  }

  const removeAllItemsHandler = () => {
    dispatch({type: "REMOVE_ALL_FROM_BAG"});
  }

  const bagCtx = {
    items: bagState.items,
    totalAmount: bagState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    removeAll: removeAllItemsHandler,
  }

  return (
    <BagContext.Provider value={bagCtx}>
      {children}
    </BagContext.Provider>
  );
}

export default BagCtxProvider;