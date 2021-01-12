import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [viewMode, setViewMode] = useState(false)
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleViewModeClick() {
    viewMode ? setViewMode(false) : setViewMode(true)

  }

  return (
    <div className={"App " + (viewMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleViewModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
