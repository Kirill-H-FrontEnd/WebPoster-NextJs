// Animations
import { motion } from "framer-motion";
// React
import { FC } from "react";
// Styles
import s from "./styles/FAQ.module.scss";
// NextUI
import { Accordion, AccordionItem } from "@nextui-org/react";
// Next
import Image from "next/image";

export const FAQ: FC = ({}) => {
  const itemClasses = {
    base: "p-0",
    title:
      "text-black dark:text-white font-semibold text-sm md:font-medium  md:text-md",
    content: "text-gray text-sm md:text-md",
  };
  const DATA_ACCORDION = [
    {
      title: "Are there any additional payments?",
      text: "The price indicated on this site includes only the cost of site development. Additionally, you will need to pay for a website subscription on the Weblium platform.",
    },
    {
      title: "Will SEO promotion of a ready website be effective?",
      text: "Certainly. Websites are built on our own Weblium platform that is SEO-friendly. You will not have any difficulties with website promotion in search engines.",
    },
    {
      title: "How can we speed up the process of creating a website?",
      text: "The minimum term for creating a landing page is 10 days. If you need a ready website faster, we ask you to prepare all materials and information to be used on the website in advance, as well as to promptly respond to our account managers. Having all the necessary information and reducing the time allotted for filling out the brief and approvals, we can make your site faster.",
    },
    {
      title:
        "You have sent me a demo of the homepage, but I don’t like it, what should I do?",
      text: "If you are not satisfied with the design of the main page, we will take your comments into account, select new references, and our designer will make another version of the main page based on the new information.",
    },
    {
      title:
        "Is it possible to decline your services and get a refund for the site?",
      text: "If you are not satisfied with the quality of the Weblium Studio's services, you can request a full refund until the design of the main page is confirmed. If the site is approved and transferred to your account on our platform, the project is considered closed, and the funds spent on its development are non-refundable.",
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
    <section className={`${s.FAQ} bg-white dark:bg-black   `}>
      <div className="container">
        <section className={s.Wrapper}>
          <section className={s.Content}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={s.Header}
            >
              <motion.h3
                variants={animation}
                custom={1}
                className="text-green "
              >
                Additional information
              </motion.h3>
              <motion.h2
                variants={animation}
                custom={2}
                className="text-black dark:text-white"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={animation} custom={3} className="text-gray">
                If you still have other questions about the site development,
                our managers will be happy to advise you personally.
              </motion.p>
            </motion.div>
            <Accordion
              fullWidth
              className={`${s.Accordion} mt-10 px-0 `}
              itemClasses={itemClasses}
            >
              {DATA_ACCORDION.map((item, i) => (
                <AccordionItem
                  classNames={{
                    base: "shadow px-3 bg-white dark:bg-black_secondary ",
                  }}
                  className={`${s.AccordionItem} `}
                  key={i}
                  title={item.title}
                >
                  {item.text}
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <figure className={s.Image}>
            <Image src={"/FAQ/img.png"} width={1000} height={1000} alt="" />
          </figure>
        </section>
      </div>
    </section>
  );
};
