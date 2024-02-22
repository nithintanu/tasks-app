import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  function handleDelete(itemToDelete) {
    setItems(prevItems => prevItems.filter(item => item !== itemToDelete));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          onChange={handleChange} 
          onKeyPress={handleKey}
          type="text" 
          value={inputText} 
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem key={index} text={todoItem} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
