"use client";
// React
import { FC, createContext, useRef } from "react";

interface IContext {
  children: React.ReactNode;
}
// useHeaderContext
export const useButtonScrollContext = createContext<boolean | any>(false);
const ButtonScrollProvider: FC<IContext> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <useButtonScrollContext.Provider value={{ targetRef, scrollToElement }}>
      {children}
    </useButtonScrollContext.Provider>
  );
};

export default ButtonScrollProvider;
