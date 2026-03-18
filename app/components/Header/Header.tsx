"use client";

// React
import { FC, useContext, useEffect, useState } from "react";
// Styles
import s from "./styles/Header.module.scss";
// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
// Icons
import { ChevronDown, Github, Menu, Moon, Sun, X } from "lucide-react";
// Components
import { Logo } from "@/app/components/UI/Logo/Logo";
import { Banner } from "../Banner/Banner";
import { ButtonGradient } from "../UI/Button/ButtonGradient";
// Context
import { useThemeProvider } from "@/providers/ThemeProvider";

type TLinkItem = {
  value: string;
  href: string;
};

type TMenuSection = {
  title: string;
  links: TLinkItem[];
};

export const Header: FC = () => {
  const pathname = usePathname();
  const pathName = pathname.replace(/^\/|\/$/g, "");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openedSection, setOpenedSection] = useState<number | null>(0);

  // Оставил как у тебя.
  // Если у тебя useThemeProvider — это хук, а не Context, замени на:
  // const { isSwitch, handleSwitchClick } = useThemeProvider();
  const { isSwitch, handleSwitchClick } = useContext(useThemeProvider);

  // Scroll: shadow + hide on scroll down
  const [isScroll, setScroll] = useState(false);
  const [isHidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handler = () => {
      const y = window.scrollY;

      setScroll(y > 0);

      if (!isMenuOpen) {
        setHidden(y > lastY && y > 80);
      }

      lastY = y;
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const DATA_NAVBAR_LINKS: TLinkItem[] = [
    { value: "Our services", href: "ourServices" },
    { value: "Portfolio", href: "portfolio" },
    { value: "Prices", href: "prices" },
    { value: "Contacts", href: "contacts" },
  ];

  const DATA_TOGGLE_MENU_LINKS: TMenuSection[] = [
    {
      title: "Pages",
      links: [
        { value: "Our services", href: "ourServices" },
        { value: "Portfolio", href: "portfolio" },
        { value: "Prices", href: "prices" },
        { value: "Contacts", href: "contacts" },
      ],
    },
    {
      title: "Resources",
      links: [
        { value: "Docs", href: "docs" },
        { value: "Learn", href: "learn" },
        { value: "Showcase", href: "showcase" },
        { value: "Blog", href: "blog" },
        { value: "Analytics", href: "analytics" },
        { value: "Previews", href: "previews" },
      ],
    },
    {
      title: "More",
      links: [
        { value: "Commerce", href: "commerce" },
        { value: "Contact Sales", href: "contactSales" },
        { value: "GitHub", href: "/" },
        { value: "Releases", href: "releases" },
        { value: "Telemetry", href: "telemetry" },
      ],
    },
    {
      title: "About",
      links: [
        { value: "DevWorkshop + studio", href: "/" },
        { value: "Open Source Software", href: "/" },
        { value: "GitHub", href: "/" },
        { value: "Twitter", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { value: "Privacy Policy", href: "/" },
        { value: "Cookie Preferences", href: "/" },
      ],
    },
  ];

  const normalizeHref = (href: string) => {
    if (href === "/") return "/";
    return href.startsWith("/") ? href : `/${href}`;
  };

  const isActiveLink = (href: string) => {
    const current = pathname.replace(/\/$/, "") || "/";
    const target = normalizeHref(href).replace(/\/$/, "") || "/";
    return current === target;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Banner />

      <header
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
        className={`${
          s.Header
        } bg-white dark:bg-black text-black dark:text-white transition-transform duration-300 ${
          isHidden && !isMenuOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          isScroll || pathName !== ""
            ? "shadow-sm shadow-gray/20 dark:shadow-black_secondary/100"
            : ""
        }`}
      >
        <div className="container">
          <section className={`${s.Wrapper} relative py-2`}>
            <Link className={s.Logo} href="/" onClick={handleCloseMenu}>
              <Logo />
              <span translate="no">Studio</span>
            </Link>

            <nav className={s.Nav}>
              <ul>
                {DATA_NAVBAR_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      className={`hover:text-blue ${
                        isActiveLink(link.href) ? `${s.active} text-blue` : ""
                      }`}
                      href={normalizeHref(link.href)}
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
                <div
                  className={`${s.Social} hover:bg-slate-100 dark:hover:bg-zinc-800`}
                  title="GitHub"
                >
                  <Link
                    target="_blank"
                    href="https://github.com/Kirill-H-FrontEnd"
                    aria-label="GitHub"
                  >
                    <Github strokeWidth={1.5} className="text-gray" size={20} />
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={handleSwitchClick}
                  className={`${s.SwitchTheme} hover:bg-slate-100 dark:hover:bg-zinc-800`}
                  aria-label="Switch theme"
                >
                  {isSwitch ? (
                    <Sun strokeWidth={1.5} className="text-gray" size={20} />
                  ) : (
                    <Moon strokeWidth={1.5} className="text-gray" size={20} />
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={handleMenuToggle}
                className={`${s.Burger} text-blue`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </nav>
          </section>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray/10 bg-white h-dvh dark:bg-black md:hidden overflow-y-auto">
            <div className="container">
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
                  onClick={handleCloseMenu}
                />
              </div>

              <div className={s.Accordion}>
                {DATA_TOGGLE_MENU_LINKS.map((item, i) => {
                  const isOpen = openedSection === i;

                  return (
                    <div
                      key={item.title}
                      className="border-b border-gray/10 last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenedSection(isOpen ? null : i)}
                        className={`${s.AccordionTrigger} flex w-full items-center justify-between`}
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm font-semibold text-black dark:text-white">
                          {item.title}
                        </span>

                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className={s.MenuItemGrid}>
                          {item.links.map((link, index) => (
                            <Link
                              key={index}
                              onClick={handleCloseMenu}
                              className={`${s.MenuLink} ${
                                isActiveLink(link.href) ? s.MenuLinkActive : ""
                              }`}
                              href={normalizeHref(link.href)}
                            >
                              <span className={s.MenuLinkDot} />
                              {link.value}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className={s.MenuFooter}>
                <span>© 2023 DevWorkshop Studio, Inc.</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
