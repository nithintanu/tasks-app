import React from "react";

function ToDoItem(props) {
  const handleCheckboxChange = () => {
    // Call the onDelete function passed from the parent component (App)
    props.onDelete(props.text);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <input
        type="checkbox"
        id={props.text}
        name="todoItem"
        value={props.text}
        onChange={handleCheckboxChange} // Call handleCheckboxChange when checkbox changes
      />
      <label htmlFor={props.text}>{props.text}</label>
    </div>
  );
}

export default ToDoItem;
