import React, { useEffect, useRef } from "react";
import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState();
  const todoRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(newItem);

    setNewItem(""); // resets newItem
  }
  useEffect(() => {
    todoRef.current.focus();
  }, []);

  return (
    <div>
      {/* FORM TO ADD TODO */}
      <form action="" className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            name=""
            ref={todoRef}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="add" type="submit">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}
