import React, { useState, createContext } from "react";
import Content from "../../components/Content";

//Context
//CompA => CompB => CompC
//UseContext => Content => Paragraph

//Theme: Dark / Light

//1. Create Context
//2. Provider
//3. Consumer : Paragraph Comp

export const ThemeContext = createContext();

export default function UseContext() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <button onClick={changeTheme}>Change color</button>
        <Content />
      </ThemeContext.Provider>
    </>
  );
}
