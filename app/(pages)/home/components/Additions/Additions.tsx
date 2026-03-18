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
import { ArrowRight } from "lucide-react";

export const Additions: FC = ({}) => {
  const DATA_CARDS = [
    {
      icon: <AiFillApple />,
      title: "Corporate Logo",
      info: "Need a fresh logo or a redesign? Our experienced designer will craft something memorable for your brand.",
      price: "$100",
      unit: "per logo",
    },
    {
      icon: <AiFillCopy />,
      title: "Copywriting",
      info: "Professional text content for your website — from landing page copy to expert blog articles.",
      price: "$15",
      unit: "per 100 words",
    },
    {
      icon: <FaUserSecret />,
      title: "Webmaster Hours",
      info: "Our specialist handles integrations, tweaks and any further technical improvements to your site.",
      price: "$75",
      unit: "per 5 hours",
    },
    {
      icon: <IoIosCart />,
      title: "Adding Products",
      info: "We fill your store with products, categories and SEO meta tags — for every item and section.",
      price: "from $1",
      unit: "per product",
    },
    {
      icon: <BsCardImage />,
      title: "Image Selection",
      info: "We carefully curate high-quality, unique stock images perfectly matched to your brand style.",
      price: "$5",
      unit: "per image",
    },
    {
      icon: <SiCampaignmonitor />,
      title: "Website Transfer",
      info: "We migrate your site to our platform, preserving your design and search engine positions.",
      price: "Custom",
      unit: "price",
    },
  ];

  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.08, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section className={`${s.Additions} bg-white dark:bg-black`}>
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
              We handle promotion, content management, and site improvements
              beyond your plan — so you can focus on your business.
            </motion.p>
          </motion.section>

          <section className={s.Cards}>
            {DATA_CARDS.map((card, i) => (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: "some", once: true }}
                variants={animation}
                custom={i}
                className={`${s.Card} bg-white dark:bg-black_secondary`}
              >
                {/* Left accent bar */}
                <div className={s.AccentBar} />

                <div className={s.CardInner}>
                  {/* Icon */}
                  <div className={s.IconWrap}>
                    <span>{card.icon}</span>
                  </div>

                  {/* Content */}
                  <div className={s.CardBody}>
                    <h4 className="text-black dark:text-white">{card.title}</h4>
                    <p className="text-gray">{card.info}</p>
                  </div>

                  {/* Footer */}
                  <div className={s.CardFooter}>
                    <div className={s.PriceBlock}>
                      <span className={s.PriceValue}>{card.price}</span>
                      <span className={s.PriceUnit}>{card.unit}</span>
                    </div>
                    <span className={s.Arrow}>
                      <ArrowRight size={15} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
