// React
import { FC, useContext } from "react";
// Styles
import s from "./styles/Advantages.module.scss";
// Animations
import { motion } from "framer-motion";
// Icons
import { Gem, Crown, Rocket } from "lucide-react";
// Providers
import { useButtonScrollContext } from "@/providers/ButtonScroll";

export const Advantages: FC = ({}) => {
  const { targetRef } = useContext(useButtonScrollContext);
  const DATA_CARDS = [
    {
      icon: <Gem strokeWidth={1.5} size={24} />,
      title: "Sites for Business",
      content:
        "Websites for Business The goal of any business is to increase sales. Our task is to help you do that. We conduct an in-depth analysis of your niche and create websites that bring profit and grow your business.",
    },
    {
      icon: <Crown strokeWidth={1.5} size={24} />,
      title: "Exclusive Design",
      content:
        "If you don't have a design for your website, you can contact us and our UI designer will create a carefully crafted intuitive user-friendly website with a unique design. We say no to one-size-fits-all solutions.",
    },
    {
      icon: <Rocket strokeWidth={1.5} size={24} />,
      title: "Endless Possibilities ",
      content:
        "We create websites of any complexity, from landing pages to online stores. As a gift after creating a website you will receive 3 months of assistance from our master for further changes and improvements for your website.",
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
    <section
      ref={targetRef}
      className={`${s.Advantages} bg-white dark:bg-black`}
    >
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <motion.h3 variants={animation} custom={1} className="text-green">
              Our Advantages
            </motion.h3>
            <motion.h2
              variants={animation}
              custom={2}
              className="text-black dark:text-white"
            >
              Solutions That Work for Your Success
            </motion.h2>
            <motion.p variants={animation} custom={3} className="text-gray">
              When working with WebPoster Studio, you get more than just a
              beautiful site. We find exclusive solutions to your problems and
              offer a wide range of services
            </motion.p>
          </motion.section>
          <section className={s.Content}>
            {DATA_CARDS.map((card, i) => (
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: "some", once: true }}
                variants={animation}
                custom={i}
                className={`${s.Card} shadow bg-white dark:bg-black_secondary/40   `}
                key={i}
              >
                <div className={` text-white`}>{card.icon}</div>
                <h3 className="text-black dark:text-white">{card.title}</h3>
                <p className="text-gray">{card.content}</p>
              </motion.article>
            ))}
          </section>
        </section>
      </div>
    </section>
  );
};
