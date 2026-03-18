// React
import { FC } from "react";
// Styles
import s from "./styles/Prices.module.scss";
import "atropos/css";
// Animations
import { motion } from "framer-motion";
// Icons
import { Check } from "lucide-react";
// Components
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
import Atropos from "atropos/react";
// Marquee
import Marquee from "react-fast-marquee";

export const Prices: FC = ({}) => {
  const DATA_CARDS = [
    {
      title: "W-Start",
      price: "$300",
      icon: "🚀",
      popular: false,
      info: "For those who need a clean, fast website without the hassle.",
      features: [
        { text: "3 pages included" },
        { text: "Basic design" },
        { text: "Mobile responsive" },
        { text: "2 revisions" },
      ],
    },
    {
      title: "W-Base",
      price: "$500",
      icon: "⚡",
      popular: false,
      info: "A step up with colour palettes, custom fonts and backgrounds.",
      features: [
        { text: "4 pages included" },
        { text: "Custom colour palette" },
        { text: "Mobile responsive" },
        { text: "10% content discount" },
      ],
    },
    {
      title: "W-Growth",
      price: "$700",
      icon: "🌟",
      popular: true,
      info: "Corporate style with gradients, advanced design and CSS animations.",
      features: [
        { text: "5 pages included" },
        { text: "Advanced design + gradients" },
        { text: "CSS animations" },
        { text: "15% content discount" },
      ],
    },
    {
      title: "W-Ultimate",
      price: "$1100",
      icon: "💎",
      popular: false,
      info: "Exclusive design with unique icons, images and JS animations.",
      features: [
        { text: "7 pages included" },
        { text: "Exclusive icons & images" },
        { text: "CSS + JS animations" },
        { text: "20% content discount" },
      ],
    },
    {
      title: "E-commerce",
      price: "$850",
      icon: "🛒",
      popular: false,
      info: "Online store with easy management and e-commerce templates.",
      features: [
        { text: "5+ pages included" },
        { text: "E-commerce templates" },
        { text: "CSS animations" },
        { text: "15% content discount" },
      ],
    },
  ];

  const DATA_ITEMS_MARQUEE = [
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/lg.svg" },
    { img: "/Integrations/lg.svg" },
  ];

  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section className={`${s.Prices} bg-white dark:bg-black`}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              Our prices
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              How Much Does a Website Cost?
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              Five plans to match every business need and budget.
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
                className={`${s.Card} ${card.popular ? s.CardPopular : ""} bg-white dark:bg-black_secondary`}
              >
                {/* Top stripe */}
                <div className={s.CardStripe} />

                {/* Popular badge */}
                {card.popular && (
                  <div className={s.PopularBadge}>
                    <span>Most Popular</span>
                  </div>
                )}

                {/* Header row: icon + title */}
                <div className={s.CardTop}>
                  <span className={s.CardIcon}>{card.icon}</span>
                  <h5 className="text-black dark:text-white">{card.title}</h5>
                </div>

                {/* Price */}
                <div className={s.PriceRow}>
                  <span className={s.PriceFrom}>from</span>
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
                    {card.price}
                  </h4>
                </div>

                {/* Description */}
                <p className={`${s.CardInfo} text-gray`}>{card.info}</p>

                {/* Features */}
                <ul className={s.Features}>
                  {card.features.map((item, j) => (
                    <li key={j}>
                      <span className={s.CheckWrap}>
                        <Check strokeWidth={3} size={10} />
                      </span>
                      <p className="text-black dark:text-white">{item.text}</p>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <ButtonGradient
                  radius="sm"
                  size="md"
                  value="Order a website"
                  className={s.CardBtn}
                />
              </motion.article>
            ))}
          </section>

          <section className={s.Integrations}>
            <h4 className="text-gray">
              The following integrations can be connected:
            </h4>
            <Marquee autoFill className={s.marquee} speed={50}>
              <div className={s.introMarquee}>
                {DATA_ITEMS_MARQUEE.map((item, i) => (
                  <div className="opacity-20" key={i}>
                    <img src={item.img} alt="" />
                  </div>
                ))}
              </div>
            </Marquee>
          </section>
        </section>
      </div>
    </section>
  );
};
