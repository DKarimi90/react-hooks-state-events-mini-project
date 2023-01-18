import React from "react";

function Task( {text, deletedItem, category} ) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deletedItem(text)}>X</button>
    </div>
  );
}

export default Task;
