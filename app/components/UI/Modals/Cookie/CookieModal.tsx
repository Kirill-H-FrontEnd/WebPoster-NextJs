"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import s from "./CookieModal.module.scss";
// NextUI
import { Button } from "@nextui-org/react";
import { FaGithubAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { X } from "lucide-react";

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
          className={`${s.CookieModal} left-0 bottom-0  bg-white/50 md:rounded-md dark:bg-black/50 fixed md:bottom-5 md:left-5 p-4 border-t-1 md:border-1 border-gray/20 backdrop-blur-md`}
        >
          <X
            onClick={() => setClose(false)}
            size={15}
            className="absolute top-[10px] right-[10px] text-black dark:text-white cursor-pointer z-[20]"
          />
          <section>
            <h4 className="text-[18px] font-semibold text-black dark:text-white">
              Hi there👋!
            </h4>
            <p className="text-xs md:text-sm font-normal text-gray dark:text-gray leading-6">
              This website is a template for a web development studio and is not
              used for commercial purposes. Enjoy watching!
            </p>
            <h5 className="text-black dark:text-white text-[14px] ">
              ⚡Social and Source:
            </h5>
            <div className="grid sm:grid-cols-2-auto gap-3">
              <p>
                <Button
                  size="md"
                  fullWidth
                  radius="full"
                  className="bg-white shadow"
                  href={"https://github.com/Kirill-H-FrontEnd"}
                >
                  <FaGithubAlt size={22} className="text-[#22262A]" />
                </Button>
              </p>
              <p>
                <Button
                  size="md"
                  fullWidth
                  radius="full"
                  className="bg-white shadow"
                  href={"https://www.linkedin.com/in/kirill-h"}
                >
                  <IoLogoLinkedin size={22} className="text-[#007BB5]" />
                </Button>
              </p>
            </div>
            {/* <div>
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
            </div> */}
          </section>
        </section>
      )}
    </>
  );
};
