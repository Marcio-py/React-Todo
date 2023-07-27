import React from "react";
import { useState } from "react";


export default function NewTodoForm({addTodo}) {

    const [newItem, setNewItem] = useState();


  function handleSubmit(e) {
    e.preventDefault();

    // setTodos((currentTodos) => {
    //   return [
    //     ...currentTodos, // pass in complete obejct
    //     {
    //       id: crypto.randomUUID(),
    //       title: newItem, // adds new object with newItem as title
    //       completed: false,
    //     },
    //   ];
    // });

    addTodo(newItem)

    setNewItem(""); // resets newItem
  }

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
