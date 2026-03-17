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
  // Scroll: shadow + hide on scroll down
  const [isScroll, setScroll] = useState<boolean>(false);
  const [isHidden, setHidden] = useState<boolean>(false);
  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      setScroll(y !== 0);
      setHidden(y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
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
      <header
        className={`${
          s.Header
        } shadow-sm shadow-gray/20 dark:shadow-black_secondary/100 bg-white dark:bg-black transition-all text-black dark:text-white ${
          pathName === "" ? "" : "shadow-sm"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
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
              className={`z-index2000 border-t-1 border-gray/10 bg-white dark:bg-black`}
            >
              {/* Menu header */}
              <div className={s.MenuHeader}>
                <div className={s.MenuHeaderGradient} />
                <div className={s.MenuHeaderIcon}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="url(#menuIconGrad)"
                      strokeWidth="0"
                    />
                    <defs>
                      <linearGradient
                        id="menuIconGrad"
                        x1="2"
                        y1="2"
                        x2="22"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2C74B3" />
                        <stop offset="1" stopColor="#42D392" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={s.MenuHeaderContent}>
                  <p className={s.MenuHeaderTitle} translate="no">
                    WebPoster Studio
                  </p>
                  <p className={s.MenuHeaderSub}>
                    Modern web solutions for your business
                  </p>
                </div>
                <ButtonGradient
                  radius="full"
                  size="sm"
                  value="Order A Website"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>

              <Accordion isCompact className={s.Accordion}>
                {DATA_TOGGLE_MENU_LINKS.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    classNames={{
                      title: `text-sm font-semibold text-black dark:text-white`,
                      trigger: `${s.AccordionTrigger}`,
                    }}
                  >
                    <NavbarMenuItem
                      className={s.MenuItemGrid}
                      key={`${item}-${i}`}
                    >
                      {item.links.map((link, i) => (
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className={`${s.MenuLink} ${
                            pathName === link.href ? s.MenuLinkActive : ""
                          }`}
                          key={i}
                          href={link.href}
                        >
                          <span className={s.MenuLinkDot} />
                          {link.value}
                        </Link>
                      ))}
                    </NavbarMenuItem>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className={s.MenuFooter}>
                <span>© 2023 DevWorkshop Studio, Inc.</span>
              </div>
            </NavbarMenu>
          </section>
        </div>
      </header>
    </>
  );
};
