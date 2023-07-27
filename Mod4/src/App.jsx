import { useState } from "react";
import "./styles.css";
import NewTodoForm from "./Components/NewTodoForm";
import List from "./Components/List";

function App() {
  // const [newItem, setNewItem] = useState();
  const [todos, setTodos] = useState([]);


function addTodo(title){
    setTodos((currentTodos) => {
      return [
        ...currentTodos, // pass in complete obejct
        {
          id: crypto.randomUUID(),
          title: title, // adds new object with newItem as title
          completed: false,
        },
      ];
    });
}


function toggleTodos(id, completed){
  setTodos((currentTodos)=>{
    return currentTodos.map((todo)=>{
      if(todo.id === id){
        return {...todo, completed}
      }
      // return todo // return todo if non match id
    })
  })
}

// function deleteTodos(id){
//   setTodos((currentTodos)=>{
//     return currentTodos.filter((todo)=>{
//       todo.id !== id 
      
//     })
//   })
// }


  return (
    <>
   <NewTodoForm addTodo = {addTodo}/>

      {/* TODO LIST  */}
      <h1 className="header">Todo list</h1>
    <List todos={todos} toggleTodos={toggleTodos}/>
    </>
  );
}

export default App;
