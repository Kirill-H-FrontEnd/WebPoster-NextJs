// React
import { FC, useContext } from "react";
// Animations
import { motion } from "framer-motion";
//Styles
import s from "./styles/Hero.module.scss";
// Context
import { useButtonScrollContext } from "@/providers/ButtonScroll";
// Components
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
// NextUI
import { Button } from "@nextui-org/react";
// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

export const Hero: FC = ({}) => {
  const { scrollToElement } = useContext(useButtonScrollContext);

  const animation = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section
      className={`${s.Hero} bg-white dark:bg-black bg-[url('/bgAnim.svg')] bg-no-repeat bg-center bg-cover dark:bg-[url('/bgAnimDark.svg')]`}
    >
      {/* Decorative orbs */}
      <div className={s.OrbBlue} />
      <div className={s.OrbGreen} />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-gray_light/20 dark:from-black dark:to-black_secondary/20" />

      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={s.Content}
          >
            {/* Badge */}
            <motion.div custom={1} variants={animation} className={s.Badge}>
              <span className={s.BadgeDot} />
              <span>
                <em>Modern web solutions</em> for your business
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={2}
              variants={animation}
              translate="no"
              className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green"
            >
              WebPoster Studio
            </motion.h1>

            {/* Description */}
            <motion.p custom={3} variants={animation} className="text-gray">
              We build high-performance websites using cutting-edge technology
              that truly grow your business and drive real revenue.
            </motion.p>

            {/* CTA buttons */}
            <motion.div custom={4} variants={animation} className={s.Actions}>
              <ButtonGradient radius="full" size="md" value="Order A Website" />
              <Button
                onClick={scrollToElement}
                size="md"
                className="bg-transparent text-green"
              >
                Why Us?
                <IoIosArrowRoundForward size={20} />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div custom={5} variants={animation} className={s.Stats}>
              <div className={s.StatItem}>
                <strong>50+</strong>
                <span>Projects done</span>
              </div>
              <div className={s.StatDivider} />
              <div className={s.StatItem}>
                <strong>3+</strong>
                <span>Years on market</span>
              </div>
              <div className={s.StatDivider} />
              <div className={s.StatItem}>
                <strong>98%</strong>
                <span>Client satisfaction</span>
              </div>
            </motion.div>
          </motion.section>
        </section>
      </div>
    </section>
  );
};
