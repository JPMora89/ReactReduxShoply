import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import "./CartIcons.css";


function CartIcons({ id }) {
  const dispatch = useDispatch();

  function add(evt) { dispatch(addToCart(id)); }
  function remove(evt) { dispatch(removeFromCart(id)); }

  return (
    <div className="d-flex justify-content-between">
      <button
        onClick={add}
        className="CartIcon fas fa-cart-plus fa-2x text-success">
            Add
      </button>
        <button
        onClick={remove}
        className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
      > Remove
      </button>
    </div>
  );
}

export default CartIcons;
