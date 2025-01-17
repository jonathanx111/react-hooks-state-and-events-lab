 import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleSelectChange(e) {
    // console.log(e.target.value)
    setSelectedCategory(selectedCategory => selectedCategory = e.target.value)
  }

  const filteredCategory = items.filter(item => {
    if (selectedCategory !== "All") {
      return item.category === selectedCategory
    } else {
      return true
    }
  })
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
