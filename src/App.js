import React from "react";
import Item from "./list";

const App = () => {
  const items = ["product- 1", "product- 2", "product- 3"];

  return (
    <div>
      <h1>List Example</h1>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item} />
        ))}
      </ul>
    </div>
  );
};

export default App;