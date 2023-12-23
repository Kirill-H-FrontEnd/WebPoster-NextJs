// React
import { FC } from "react";
// Styles
import s from "./styles/Additions.module.scss";
import "atropos/css";
// Components
import Atropos from "atropos/react";
// Animations
import { motion } from "framer-motion";
// Icons
import { AiFillApple, AiFillCopy } from "react-icons/ai";
import { FaUserSecret } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { BsCardImage } from "react-icons/bs";
import { SiCampaignmonitor } from "react-icons/si";

export const Additions: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <AiFillApple />,
      title: "Corporate logo",
      info: "Do you need to design a new logo or redo an old one? Our experienced designer will gladly take care of it.",
      price: "$100 per 1 logo",
    },
    {
      icon: <AiFillCopy />,
      title: "Copywriting",
      info: "We offer professional text content for your website. From copy for landing pages to expert blog articles.",
      price: "$15 per 100 words",
    },
    {
      icon: <FaUserSecret />,
      title: "Webmaster hours",
      info: "Our technical specialist will help with any integrations and further improvements of your site.",
      price: "$75 per 5 hours",
    },
    {
      icon: <IoIosCart />,
      title: "Adding products",
      info: "We will help you fill your site with products and add categories and meta tags for each product and section.",
      price: "from $1 per product",
    },
    {
      icon: <BsCardImage />,
      title: "Selecting images",
      info: "We can carefully select high-quality and unhackneyed stock images and fill your site with them.",
      price: "$5 per image",
    },
    {
      icon: <SiCampaignmonitor />,
      title: "Website transfer",
      info: "We will help you move to our platform, preserving your design and position in search engines as much as possible.",
      price: "the price is negotiable",
    },
  ];
  // Animation
  const animation = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <section className={`${s.Additions} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              What else can we do?
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              Additional Services
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              Weblium Studio can take over all the work on promotion, content
              management, and site improvements that are not included in your
              pricing plan.
            </motion.p>
          </motion.section>
          <section className={s.Cards}>
            {DATA_CARDS.map((card, i) => (
              <Atropos key={i} shadow={false} className="bg-transparent">
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: "some", once: true }}
                  variants={animation}
                  custom={i}
                  className={`${s.Card} shadow-sm border-1 border-gray/10 bg-gray_light/30 dark:bg-black_secondary`}
                >
                  <div className={s.icon}>
                    <span className="bg-gradient-to-br from-blue to-green text-white">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="text-black dark:text-white">{card.title}</h4>
                  <p className="text-gray">{card.info}</p>
                  <p className={`${s.price} text-green`}>{card.price}</p>
                </motion.article>
              </Atropos>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
