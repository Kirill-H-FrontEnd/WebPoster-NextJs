"use client";
// React
import { FC } from "react";
// Styles
import s from "./styles/Footer.module.scss";
// Next
import Link from "next/link";
// NextUI
import { Tooltip } from "@nextui-org/react";
// Components
import { Logo } from "@/app/components/UI/Logo/Logo";
import { FooterForm } from "./form";
// Icons
import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer: FC = ({}) => {
  const getFullYear = new Date().getFullYear();
  const DATA_ACTIONS = [
    {
      title: "Resources",
      links: [
        {
          value: "Docs",
          href: "/",
        },
        {
          value: "Learn",
          href: "/",
        },
        {
          value: "Showcase",
          href: "/",
        },
        {
          value: "Blog",
          href: "/",
        },
        {
          value: "Analytics",
          href: "/",
        },
        {
          value: "Previews",
          href: "/",
        },
      ],
    },
    {
      title: "More",
      links: [
        {
          value: "Commerce",
          href: "/",
        },
        {
          value: "Contact Sales",
          href: "/",
        },
        {
          value: "GitHub",
          href: "/",
        },
        {
          value: "Releases",
          href: "/",
        },
        {
          value: "Telemetry",
          href: "/",
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
  const DATA_SOCIAL_ICONS = [
    {
      title: "GitHub",
      href: "https://github.com/",
      icon: <Github strokeWidth={1.5} size={18} />,
    },

    {
      title: "Linkedin",
      href: "https://il.linkedin.com/",
      icon: <Linkedin strokeWidth={1.5} size={18} />,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/",
      icon: <Twitter strokeWidth={1.5} size={18} />,
    },
  ];
  return (
    <footer
      className={`${s.Footer} bg-white dark:bg-black border-t-1 border-gray/10`}
    >
      <div className="container ">
        <section className={`${s.Wrapper}`}>
          <section className={s.Content}>
            <Link className={s.Logo} href={"/"}>
              <Logo />
              <span translate="no">Studio</span>
            </Link>
            <ul className={s.Actions}>
              {DATA_ACTIONS.map((item, i) => (
                <li key={i}>
                  <h5 className="text-black dark:text-white">{item.title}</h5>
                  <div>
                    {item.links.map((link, i) => (
                      <Link
                        key={i}
                        className="text-gray hover:text-green"
                        href={link.href}
                      >
                        {link.value}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className={s.Subscribe}>
              <h5>Subscribe to our newsletter</h5>
              <p className="text-gray">
                Stay updated on new releases and features, guides, and case
                studies.
              </p>
              {/* Form */}
              <FooterForm />
              <div className={s.Social}>
                {DATA_SOCIAL_ICONS.map((item, i) => (
                  <Tooltip
                    key={i}
                    size="sm"
                    placement="bottom"
                    showArrow
                    content={item.title}
                  >
                    <Link target="_blank" href={item.href}>
                      {item.icon}
                    </Link>
                  </Tooltip>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>
      <section className={`${s.Copyright} bg-gray/5 border-t-1 border-gray/10`}>
        <div className="text-gray">
          © {getFullYear} DevWorkshop Studio, Inc.
        </div>
      </section>
    </footer>
  );
};
