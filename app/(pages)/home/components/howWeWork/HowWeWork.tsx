// React
import { FC } from "react";
// Animations
import { motion } from "framer-motion";
// Styles
import s from "./styles/HowWeWork.module.scss";
// Next
import Image from "next/image";

export const HowWeWork: FC = ({}) => {
  const DATA_LIST = [
    {
      title: "1. Filling out our brief",
      text: "Our manager contacts you and offers to fill out a website design brief. This way, we can better understand the specifics of your business.",
    },
    {
      title: "2. Prototyping",
      text: "UX specialists prepare the structure of the main page of your future website. At this stage, we also add text content.",
    },
    {
      title: "3. Demo version",
      text: "The designer creates the main page of the site based on the prototype. We send the ready main page to you for approval",
    },
    {
      title: "4. Site development",
      text: "When the main page is approved, we move on to work on the structure, design, and content of the internal pages of the site.",
    },
    {
      title: "5. Launch and transfer to the owner",
      text: "When the site is ready and approved, we transfer it to your account and open it for indexing by search engines.",
    },
  ];
  // Animation
  const animationImg = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  // Animation
  const animationText = {
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
    <section className={`${s.HowWeWork} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.figure
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animationImg}
            className={s.Image}
          >
            <Image
              src={"/HowWeWork/img.png"}
              width={1000}
              height={1000}
              alt=""
            />
          </motion.figure>
          <section className={s.Content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationText}
              viewport={{ amount: 0.2, once: true }}
              className={s.header}
            >
              <h3 className="text-green">Site creation process</h3>
              <h2 className="text-black dark:text-white">How We Work</h2>
              <p className="text-gray">
                Our goal is to create a truly effective website for you. To do
                this, we have divided the development process into stages:
              </p>
            </motion.div>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              className={s.List}
            >
              {DATA_LIST.map((item, i) => (
                <motion.li variants={animationText} custom={i} key={i}>
                  <h4 className="text-green">{item.title}</h4>
                  <p className="text-gray">{item.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>
        </section>
      </div>
    </section>
  );
};
