import React from "react";
import Button from "../../ui/Button.jsx";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span className="font-medium">{currentQuantity}</span>

      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
