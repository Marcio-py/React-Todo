import React from 'react'
import TodoItem from './TodoItem'

export default function List({todos, toggleTodos, deleteTodos}) {
  return (
    <div>
            <h1 className="header">Todo list</h1>

            <ul className="list">
        {todos.length === 0 && "No To Do" } 

        {todos.map((todo) => (
         <TodoItem 
         {...todo} //todo.completed, todo.id, todo.title, 
         deleteTodos={deleteTodos}
         toggleTodos={toggleTodos}
        key={todo.id}
         />

         ))}
      </ul>

    </div>
  )
}
