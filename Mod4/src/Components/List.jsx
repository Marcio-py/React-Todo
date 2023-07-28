import React from 'react'
import TodoItem from './TodoItem'

export default function List({todos, toggleTodos, deleteTodos}) {
  return (
    <div>
            <ul className="list">
        {todos.length === 0 && "No To Do" } 

        {todos.map((todo) => (
         <TodoItem 
         {...todo}
        //  id={todo.id} 
        //  completed={todo.completed} 
        //  title={todo.title}
         deleteTodos={deleteTodos}
         toggleTodos={toggleTodos}
        key={todo.id}
         />

         ))}
      </ul>

    </div>
  )
}
