"use client";
// React
import { FC } from "react";
// Animations
import { motion } from "framer-motion";
// Styles
import s from "./styles/SendRequest.module.scss";
// Components
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";

type TBannerSendRequest = {};

export const BannerSendRequest: FC<TBannerSendRequest> = ({}) => {
  // Animation
  const animation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <section
      className={`${s.SendRequest} bg-white dark:bg-black  border-t-1 border-gray/10 `}
    >
      <div className="container">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={animation}
          className={s.Wrapper}
        >
          <section>
            <h3 className="text-green">Send us a request</h3>
            <h2 className="text-black dark:text-white">Need a New Website?</h2>
            <p className="text-gray">
              Leave your contacts, and we will contact you to clarify the
              details and start the site development!
            </p>
            <ButtonGradient radius="full" size="md" value="Order A Website" />
          </section>
        </motion.section>
      </div>
    </section>
  );
};
