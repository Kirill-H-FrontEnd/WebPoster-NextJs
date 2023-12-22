"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./CookieModal.module.scss";
// NextUI
import { Button } from "@nextui-org/react";
type TCookieModal = {};

export const CookieModal: FC = ({}) => {
  const [isClose, setClose] = useState(true);
  useEffect(() => {
    const storedValue = window.sessionStorage.getItem("bannerCookie");
    if (storedValue !== null) {
      setClose(JSON.parse(storedValue));
    }
  }, []);
  useEffect(() => {
    sessionStorage.setItem("bannerCookie", JSON.stringify(isClose));
  }, [isClose]);
  return (
    <>
      {isClose && (
        <section
          className={`${s.CookieModal} left-0 bottom-0  bg-white md:rounded-md dark:bg-black fixed md:bottom-5 md:left-5 p-4 border-t-1 md:border-1 border-gray/20 `}
        >
          <section>
            <h5 className="text-xs md:text-sm font-normal text-black dark:text-white leading-6">
              This website uses cookies to supplement a balanced diet and
              provide a much deserved reward to the senses after consuming bland
              but nutritious meals. Accepting our cookies is optional but
              recommended, as they are delicious. See our{" "}
              <Link className="text-green" href={"/"}>
                cookie policy.
              </Link>
            </h5>
            <div>
              <Button
                onClick={() => setClose(false)}
                radius="sm"
                className="text-xs md:text-sm bg-black text-white font-medium mr-3 dark:bg-black_secondary"
              >
                Accept All
              </Button>
              <Button
                onClick={() => setClose(false)}
                radius="sm"
                className="shadow text-xs md:text-sm bg-transparent font-medium "
              >
                Reject All
              </Button>
            </div>
          </section>
        </section>
      )}
    </>
  );
};
