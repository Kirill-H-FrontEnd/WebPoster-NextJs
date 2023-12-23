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
      info: "This option is for people who do not have time for website development.",
      features: [
        {
          text: "Basic design",
        },
        {
          text: "2 pages",
        },
        {
          text: "Adaptive view",
        },
      ],
    },
    {
      title: "W-Base",
      price: "$500",
      info: "This option is for people who do not have time for website development.",
      features: [
        {
          text: "Simple design",
        },
        {
          text: "3 pages",
        },
        {
          text: "Adaptive view",
        },
      ],
    },
    {
      title: "W-Growth",
      price: "$700",
      info: "The best choice for those who need a website in a corporate style with the specifics of their business niche taken into account.",
      features: [
        {
          text: "Advanced design",
        },
        {
          text: "4 pages",
        },
        {
          text: "Adaptive view",
        },
      ],
    },
    {
      title: "W-Ultimate",
      price: "$1100",
      info: "Exclusive design for those who want to stand out from competitors as much as possible.",
      features: [
        {
          text: "Exclusive design",
        },
        {
          text: "6 pages",
        },
        {
          text: "Adaptive view",
        },
      ],
    },
    {
      title: "E-commerce",
      price: "$850",
      info: "This option is for people who are looking for a online store with easy management.",
      features: [
        {
          text: "Advanced design",
        },
        {
          text: "4 pages + e-commerce pages",
        },
        {
          text: "Adaptive view",
        },
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
    <section className={`${s.Prices} bg-white dark:bg-black `}>
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
              We offer five pricing plans, depending on your needs.
            </motion.p>
          </motion.section>
          <section className={s.Cards}>
            {DATA_CARDS.map((card, i) => (
              <Atropos
                highlight={false}
                shadow={false}
                className="bg-transparent"
                key={i}
              >
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: "some", once: true }}
                  variants={animation}
                  custom={i}
                  className={`${s.Card} rounded-lg border-1 border-gray/10 bg-white dark:bg-black_secondary`}
                >
                  <h5 className="text-black dark:text-white">{card.title}</h5>
                  <h4 className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
                    {card.price}
                  </h4>
                  <p className="text-gray">{card.info}</p>
                  <ul className={s.Features}>
                    {card.features.map((item, i) => (
                      <li key={i}>
                        <i>
                          <Check
                            strokeWidth={2}
                            className="text-blue dark:text-green"
                            size={18}
                          />
                        </i>
                        <p className="text-black dark:text-white">
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <ButtonGradient
                    radius="sm"
                    size="md"
                    value="Order a website"
                  />
                </motion.article>
              </Atropos>
            ))}
          </section>
          <section className={s.Integrations}>
            <h4 className="text-gray ">
              The following integrations can be connected:{" "}
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
