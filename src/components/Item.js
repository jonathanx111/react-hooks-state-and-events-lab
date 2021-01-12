import React from "react";

function Item({ name, category }) {
  // const []

  function handleAddCartButton() {

  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddCartButton} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
