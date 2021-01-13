import React, { useState } from "react";

function Item({ name, category }) {
  const [inCartOrOut, setInCartOrOut] = useState("")

  function handleAddCartButton() {
    setInCartOrOut(inCartOrOut => inCartOrOut === "in-cart" ? inCartOrOut = "" : inCartOrOut = "in-cart")
  }

  return (
    <li className={inCartOrOut}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCartButton} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
