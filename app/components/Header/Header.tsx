"use client";
// React
import { FC, useEffect, useContext, useState } from "react";
// NextUi
import {
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Tooltip,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
// Styles
import s from "./styles/Header.module.scss";
// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import { Github, Sun, Moon } from "lucide-react";
// Components
import { Logo } from "@/app/components/UI/Logo/Logo";
import { Banner } from "../Banner/Banner";
import { ButtonGradient } from "../UI/Button/ButtonGradient";
// Context
import { useThemeProvider } from "@/providers/ThemeProvider";

export const Header: FC = ({}) => {
  const pathName = usePathname().replace("/", "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerActive, setBurgerActive] = useState(false);
  // Switch Theme
  const { isSwitch, handleSwitchClick } = useContext(useThemeProvider);
  // Set class shadow to header
  const [isScroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY != 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [isScroll]);
  // Array navigation links
  const DATA_NAVBAR_LINKS = [
    {
      value: "Our services",
      href: "ourServices",
    },
    {
      value: "Portfolio",
      href: "portfolio",
    },
    {
      value: "Prices",
      href: "prices",
    },
    {
      value: "Contacts",
      href: "contacts",
    },
  ];
  const DATA_TOGGLE_MENU_LINKS = [
    {
      title: "Pages",
      links: [
        {
          value: "Our services",
          href: "ourServices",
        },
        {
          value: "Portfolio",
          href: "portfolio",
        },
        {
          value: "Prices",
          href: "prices",
        },
        {
          value: "Contacts",
          href: "contacts",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          value: "Docs",
          href: "docs",
        },
        {
          value: "Learn",
          href: "learn",
        },
        {
          value: "Showcase",
          href: "showcase",
        },
        {
          value: "Blog",
          href: "blog",
        },
        {
          value: "Analytics",
          href: "analytics",
        },
        {
          value: "Previews",
          href: "previews",
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          value: "Commerce",
          href: "commerce",
        },
        {
          value: "Contact Sales",
          href: "contactSales",
        },
        {
          value: "GitHub",
          href: "/",
        },
        {
          value: "Releases",
          href: "releases",
        },
        {
          value: "Telemetry",
          href: "telemetry",
        },
      ],
    },
    {
      title: "About ",
      links: [
        {
          value: "DevWorkshop + studio",
          href: "/",
        },
        {
          value: "Open Source Software",
          href: "/",
        },
        {
          value: "GitHub",
          href: "/",
        },
        {
          value: "Twitter",
          href: "/",
        },
      ],
    },
    {
      title: "Legal ",
      links: [
        {
          value: "Privacy Policy",
          href: "/",
        },
        {
          value: "Cookie Preferences",
          href: "/",
        },
      ],
    },
  ];

  return (
    <>
      <Banner />
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        isBlurred={false}
        maxWidth="full"
        shouldHideOnScroll
        height={"3.7rem"}
        className={`${
          s.Header
        } shadow-sm shadow-gray/20 dark:shadow-black_secondary/100 bg-white dark:bg-black transition-shadow text-black dark:text-white  ${
          pathName === "" ? "" : "shadow-sm"
        }`}
      >
        <div className="container">
          <section className={s.Wrapper}>
            <Link
              className={s.Logo}
              href={"/"}
              onClick={() => setIsMenuOpen(false)}
            >
              <Logo />
              <span translate="no">Studio</span>
            </Link>
            <nav className={s.Nav}>
              <ul>
                {DATA_NAVBAR_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      className={`hover:text-blue ${
                        pathName === link.href ? `${s.active} text-blue` : ""
                      }`}
                      href={link.href}
                    >
                      {link.value}
                    </Link>
                  </li>
                ))}
              </ul>
              <ButtonGradient
                radius="full"
                size="md"
                className={s.Button}
                value="Order site"
              />
              <div className={s.Actions}>
                <Tooltip content="GitHub" size="sm" showArrow>
                  <div
                    className={`${s.Social} hover:bg-slate-100 dark:hover:bg-zinc-800`}
                  >
                    <Link
                      target="_blank"
                      href={"https://github.com/Kirill-H-FrontEnd"}
                    >
                      <Github
                        strokeWidth={1.5}
                        className="text-gray"
                        size={20}
                      />
                    </Link>
                  </div>
                </Tooltip>
                <button
                  onClick={handleSwitchClick}
                  className={`${s.SwitchTheme} hover:bg-slate-100 dark:hover:bg-zinc-800`}
                >
                  {isSwitch ? (
                    <Sun strokeWidth={1.5} className="text-gray" size={20} />
                  ) : (
                    <Moon strokeWidth={1.5} className="text-gray" size={20} />
                  )}
                </button>
              </div>
              {/* BurgerMenu */}
              <NavbarMenuToggle
                onClick={() => setBurgerActive(!isBurgerActive)}
                className={`${s.Burger} text-blue `}
              />
            </nav>
            {/* ToggleMenu */}
            <NavbarMenu
              className={`z-index2000 border-t-1 border-gray/10 bg-white dark:bg-black px-1`}
            >
              <Accordion isCompact className={s.Accordion}>
                {DATA_TOGGLE_MENU_LINKS.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    classNames={{
                      title: "text-black dark:text-white ",
                    }}
                  >
                    <NavbarMenuItem className="grid gap-3" key={`${item}-${i}`}>
                      {item.links.map((link, i) => (
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className={`relative text-sm  ml-2 pl-3 before:block before:absolute before:w-1 before:h-1 before:top-2 before:left-0 before:rounded-full ${
                            pathName === link.href
                              ? `text-blue dark:text-green before:bg-blue dark:before:bg-green `
                              : "before:bg-gray/30 text-gray "
                          }`}
                          key={i}
                          href={link.href}
                        >
                          {link.value}
                        </Link>
                      ))}
                    </NavbarMenuItem>
                  </AccordionItem>
                ))}
              </Accordion>

              <div
                className={`${s.Copyright} pt-2 mx-2 text-center text-gray text-sm mt-4  border-t-1 border-gray/10`}
              >
                © 2023 DevWorkshop Studio, Inc.
              </div>
            </NavbarMenu>
          </section>
        </div>
      </Navbar>
    </>
  );
};
