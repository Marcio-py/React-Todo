import React, { useState } from "react";
import Login from "./Components/Login";
import MainWindow from "./Components/MainWindow";
import "./styles.css";
import Navbar from "./Components/Navbar";

export const ThemeContext = React.createContext(null);

function App() {
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const openMain = () => {
    setLogin((login) => !login);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {login ? (
        <>
          <Navbar />
          <MainWindow theme={theme} />
        </>
      ) : (
        <Login openMain={openMain} theme={theme} />
      )}
    </ThemeContext.Provider>
  );
}

export default App;
