import React from 'react'

export default function List({todos, toggleTodos}) {
  return (
    <div>
            <ul className="list">
        {todos.length === 0 && "No To Do" } 

        {todos.map((todo) => (
          <li key={todo.id}>
          <label >
          <input 
          type="checkbox"
          checked={todo.completed} 
          name="" id="" 
          onChange={(e) => {toggleTodos(todo.id , e.target.checked)}}
          
          />
          {todo.title}
          </label>
          <button className="btn btn-danger" onClick={()=>deleteTodos(todo.id)}>Delete</button>
          </li>
          ))}
      </ul>

    </div>
  )
}
