// React
import { FC, useEffect, useState } from "react";
// Styles
import s from "./styles/Banner.module.scss";
// Icons
import { X } from "lucide-react";

export const Banner: FC = ({}) => {
  const [isClose, setClose] = useState(true);
  useEffect(() => {
    const storedValue = window.localStorage.getItem("banner");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("banner", JSON.stringify(isClose));
  }, [isClose]);
  return (
    <>
      {isClose && (
        <section className={`${s.Banner} py-2 hidden sm:grid `}>
          <div className="container">
            <section className={`${s.Wrapper} `}>
              <section className="text-white text-xs font-light  ">
                <span className="font-normal text-green ">PROMOTION! </span>
                Order a website now and get +3 months of help from our master
                for further changes and improvements to your website!
              </section>
            </section>
          </div>
          <button onClick={() => setClose(false)} className="text-white">
            <X size={16} strokeWidth={2.5} />
          </button>
        </section>
      )}
    </>
  );
};
