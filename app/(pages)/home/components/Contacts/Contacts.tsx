// React
import { FC } from "react";
// Styles
import s from "./styles/Contacts.module.scss";
// Animations
import { motion } from "framer-motion";
// Components
import { ContactForm } from "./form";

export const Contacts: FC = ({}) => {
  // Animation
  const animation = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <section className={`${s.Contacts} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Content}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animation}
            className={s.Info}
          >
            <h3 className="text-green">Need a website?</h3>
            <h2 className="text-black dark:text-white">
              Do You Want to Order a New Website?
            </h2>
            <p className="text-gray">
              Fill out the form, and we will contact you shortly to help you
              choose the best pricing plan and discuss all the nuances.
            </p>
            <p className="text-gray">
              We will take all your wishes in terms of structure, design, and
              content into account and will develop a modern, effective, and
              beautiful website for your business.
            </p>
          </motion.section>
          <ContactForm />
        </section>
      </div>
    </section>
  );
};
