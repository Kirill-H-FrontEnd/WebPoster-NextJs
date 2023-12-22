"use client";
// React
import { FC, useEffect, useState } from "react";
// Styles
import "./styles/Loader.css";

export const Loader: FC = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = () => {
    setIsLoading(true);
  };
  return (
    <>
      {isLoading ? (
        <section className={`loader bg-white dark:bg-black`}>
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
