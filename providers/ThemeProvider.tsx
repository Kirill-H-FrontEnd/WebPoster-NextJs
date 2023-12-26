"use client";
// React
import { FC, createContext, useEffect, useState } from "react";

interface IContext {
  children: React.ReactNode;
}

export const useThemeProvider = createContext<boolean | any>(false);
const ThemeProvider: FC<IContext> = ({ children }) => {
  const [isSwitch, setSwitch] = useState<boolean>(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem("isSwitch");
    if (storedValue !== null) {
      setSwitch(JSON.parse(storedValue));
    }
  }, []);

  const handleSwitchClick = () => {
    const newSwitchState = !isSwitch;
    setSwitch(newSwitchState);
    localStorage.setItem("isSwitch", JSON.stringify(newSwitchState));
  };

  useEffect(() => {
    const className = "dark";
    if (isSwitch) {
      document.querySelector("html")?.classList.add(className);
    } else {
      document.querySelector("html")?.classList.remove(className);
    }
  }, [isSwitch]);
  return (
    <useThemeProvider.Provider value={{ isSwitch, handleSwitchClick }}>
      {children}
    </useThemeProvider.Provider>
  );
};

export default ThemeProvider;
