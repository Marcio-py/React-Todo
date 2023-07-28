import { useState } from "react";
import Login from "./Components/Login";
import MainWindow from "./Components/MainWindow";
import "./styles.css";

function App() {
  const [login, setLogin] = useState(false)

  const openMain = ()=>{
    setLogin((login)=>!login)
  }

  return (
    <>
   
   {login ? <MainWindow/> :  <Login openMain={openMain}/>} 

    </>
  );
}

export default App;
