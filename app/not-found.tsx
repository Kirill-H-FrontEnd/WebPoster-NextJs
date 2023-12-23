"use client";
// Next
import Link from "next/link";
// Icons
import { IoBookSharp } from "react-icons/io5";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { GiDatabase } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
// Animations
import { motion } from "framer-motion";
import { TitleBannerPage } from "./components/TitleBannerPage/TitleBannerPage";

export default function NotFoundPage() {
  const DATA_CARDS = [
    {
      title: "Home",
      href: "/",
      suptTitle: "Return to Home page.",
      icon: <MdHomeFilled size={26} />,
    },
    {
      title: "Documentation",
      href: "/",
      suptTitle: "Learn how to integrate our tools with your app.",
      icon: <IoBookSharp size={26} />,
    },
    {
      title: "API Reference",
      href: "/",
      suptTitle: "A complete API reference for our libraries.",
      icon: <GiDatabase size={26} />,
    },
    {
      title: "Guides",
      href: "/",
      suptTitle: "Installation guides that cover popular setups.",
      icon: <BsBookmarkCheckFill size={26} />,
    },
    {
      title: "Blog",
      href: "/",
      suptTitle: "Read our latest news and articles.",
      icon: <PiContactlessPaymentFill size={26} />,
    },
  ];
  return (
    <>
      <TitleBannerPage
        supTitle="404"
        text="Sorry, we couldn’t find the page you’re looking for."
        title="This page does not exist..."
      />
      <motion.section className="py-16 bg-white dark:bg-black">
        <div className="container">
          <section className="grid md:grid-cols-5 gap-4">
            {DATA_CARDS.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className="relative bg-white dark:bg-black_secondary/5 border-1 border-gray/20 rounded-lg p-4 transition-background hover:bg-gray/5 hover:dark:bg-black_secondary"
              >
                <div className="text-purple border-1 border-gray/20 rounded-md inline-block p-2">
                  {card.icon}
                </div>
                <div className="mt-2">
                  <h5 className="text-black dark:text-white font-medium">
                    {card.title}
                  </h5>
                  <p className="text-gray text-sm">{card.suptTitle}</p>
                </div>
                <i className="absolute top-1 right-1 text-gray">
                  <FiExternalLink />
                </i>
              </Link>
            ))}
          </section>
        </div>
      </motion.section>
    </>
  );
}
