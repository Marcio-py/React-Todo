import React from 'react'

// export default function TodoItem({completed, id, title, toggleTodos, deleteTodos}) {
export default function TodoItem({completed, id, title, toggleTodos, deleteTodos}) {
  return (
    <div>
       <li key={id}>
          <label >
          <input 
          type="checkbox"
          checked={completed} 
          name="" id="" 
          onChange={(e) => {toggleTodos(id , e.target.checked)}}
          
          />
          {title}
          </label>
          <button className="btn btn-danger" onClick={()=>deleteTodos(id)}>Delete</button>
          </li>
    </div>
  )
}
