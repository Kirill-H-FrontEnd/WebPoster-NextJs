"use client";
import { FC } from "react";
import s from "./styles/Card.module.scss";

import { motion } from "framer-motion";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
type TCard = {};

export const Card: FC = ({}) => {
  const DATA_CARDS = [
    {
      title: "W-Start",
      price: "$300",
      info: "This option is for people who do not have time for website development.",
      features: [
        {
          title: "Design type:",
          value: "Basic design",
        },
        {
          title: "Number of pages:",
          value:
            "3 – Homepage, 404 page, 1 generic pages from list: About, Contacts, Services, FAQ, Team, Portfolio, Careers or Pricing",
        },
        {
          title: "Prototyping (all pages):",
          value: "Included",
        },
        {
          title: "The software on which the design is developed:",
          value: "WebPoster",
        },
        {
          title: "Mobile version:",
          value: "Included. Responsive design based on the Weblium editor",
        },
        {
          title: "Logo creation:",
          value: "Text logo (vector format is not included)",
        },
        {
          title: "Images:",
          value: "Stock images",
        },
        {
          title: "Icons:",
          value: "Icons from Weblium base",
        },
        {
          title: "Editing photos to match your common site style:",
          value: "No",
        },
        {
          title: "Animation:",
          value: "Animations that are available in the editor",
        },
        {
          title: "Pop-up creation:",
          value: "1 pop-up from the list: Contact form or Promo information",
        },
        {
          title: "Backgrounds editing:",
          value: "No",
        },
        {
          title: "Number of edits included:",
          value: "2",
        },
        {
          title: "Discount on filling your site with content:",
          value: "No",
        },
      ],
    },
    {
      title: "W-Base",
      price: "$500",
      info: "This option is for people who do not have time for website development.",
      features: [
        {
          title: "Design type:",
          value:
            "Simple design with the selection of the colour palette, fonts, and backgrounds for your website",
        },
        {
          title: "Number of pages:",
          value:
            "4 – Homepage, 404 page, 2 generic pages from list: About, Contacts, Services, FAQ, Team, Portfolio, Careers or Pricing",
        },
        {
          title: "Prototyping (all pages):",
          value: "Included",
        },
        {
          title: "The software on which the design is developed:",
          value: "WebPoster",
        },
        {
          title: "Mobile version:",
          value: "Included. Responsive design based on the Weblium editor",
        },
        {
          title: "Logo creation:",
          value: "Text logo (vector format is not included)",
        },
        {
          title: "Images:",
          value: "Stock images",
        },
        {
          title: "Stock icons",
        },
        {
          title: "Editing photos to match your common site style:",
          value: "No",
        },
        {
          title: "Animation:",
          value: "Animations that are available in the editor",
        },
        {
          title: "Pop-up creation:",
          value: "2 pop-ups from the list: Contact form or Promo information",
        },
        {
          title: "Backgrounds editing:",
          value: "Adding different shades",
        },
        {
          title: "Number of edits included:",
          value: "2",
        },
        {
          title: "Discount on filling your site with content:",
          value: "10%",
        },
      ],
    },
    {
      title: "W-Growth",
      price: "$700",
      info: "The best choice for those who need a website in a corporate style with the specifics of their business niche taken into account.",
      features: [
        {
          title: "Design type:",
          value:
            "Advanced design that includes the selection of the color palette, fonts, and backgrounds, as well as using gradients",
        },
        {
          title: "Number of pages:",
          value: "5 – Homepage, 404 page, 3 generic pages",
        },
        {
          title: "Prototyping (all pages):",
          value: "Included",
        },
        {
          title: "The software on which the design is developed:",
          value: "WebPoster",
        },
        {
          title: "Mobile version:",
          value:
            "Included. Responsive design based on the Weblium editor and custom CSS",
        },
        {
          title: "Logo creation:",
          value: "Text logo in vector format",
        },
        {
          title: "Images:",
          value: "Stock images",
        },
        {
          title: "Stock icons",
        },
        {
          title: "Editing photos to match your common site style:",
          value: "Included",
        },
        {
          title: "Animation:",
          value: "Creating animations using CSS",
        },
        {
          title: "Pop-up creation:",
          value: "2 pop-ups ",
        },
        {
          title: "Backgrounds editing:",
          value: "Adding different shades and gradients",
        },
        {
          title: "Number of edits included:",
          value: "2",
        },
        {
          title: "Discount on filling your site with content:",
          value: "15%",
        },
      ],
    },
    {
      title: "W-Ultimate",
      price: "$1100",
      info: "Exclusive design for those who want to stand out from competitors as much as possible.",
      features: [
        {
          title: "Design type:",
          value:
            "Exclusive design that includes the creation of unique icons, images, and backgrounds",
        },
        {
          title: "Number of pages:",
          value: "7 – Homepage, 404 page, 5 generic pages",
        },
        {
          title: "Prototyping (all pages):",
          value: "Included",
        },
        {
          title: "The software on which the design is developed:",
          value: "WebPoster",
        },
        {
          title: "Mobile version:",
          value:
            "Included. Responsive design based on the Weblium editor and custom CSS",
        },
        {
          title: "Logo creation:",
          value: "Text logo in vector format",
        },
        {
          title: "Images:",
          value: "Stock images",
        },
        {
          title: "Stock icons",
          value: "Exclusive icons created by our designer",
        },
        {
          title: "Editing photos to match your common site style:",
          value: "Included",
        },
        {
          title: "Animation:",
          value: "Creating animations using CSS and JS",
        },
        {
          title: "Pop-up creation:",
          value: "3 pop-ups ",
        },
        {
          title: "Backgrounds editing:",
          value: "Adding gradients, images, and complex geometric shapes",
        },
        {
          title: "Number of edits included:",
          value: "3",
        },
        {
          title: "Discount on filling your site with content:",
          value: "20%",
        },
      ],
    },
    {
      title: "E-commerce",
      price: "$850",
      info: "This option is for people who are looking for a online store with easy management.",
      features: [
        {
          title: "Design type:",
          value:
            "Basic design with an option of using gradients on the backgrounds when needed",
        },
        {
          title: "Number of pages:",
          value:
            "5+ – Homepage, 404 page, 3 generic and e-commerce template pages",
        },
        {
          title: "Prototyping (all pages):",
          value: "Included",
        },
        {
          title: "The software on which the design is developed:",
          value: "WebPoster",
        },
        {
          title: "Mobile version:",
          value:
            "Included. Responsive design based on the Weblium editor and custom CSS",
        },
        {
          title: "Logo creation:",
          value: "Text logo in vector format",
        },
        {
          title: "Images:",
          value: "Stock images",
        },
        {
          title: "Stock icons",
          value: "Stock icons",
        },
        {
          title: "Editing photos to match your common site style:",
          value: "Included",
        },
        {
          title: "Animation:",
          value: "Creating animations using CSS",
        },
        {
          title: "Pop-up creation:",
          value: "2 pop-ups ",
        },
        {
          title: "Backgrounds editing:",
          value: "Adding gradients and complex geometric shapes",
        },
        {
          title: "Number of edits included:",
          value: "2",
        },
        {
          title: "Discount on filling your site with content:",
          value: "15%",
        },
      ],
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
    <section className={`${s.CardsWrapper} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Cards}>
          {DATA_CARDS.map((card, i) => (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: "some", once: true }}
              variants={animation}
              custom={i}
              key={i}
              className={`${s.Card} border-1 border-gray/10 shadow-md bg-white dark:bg-black_secondary`}
            >
              <div className={s.CardsHeader}>
                <h5 className="text-black dark:text-white">{card.title}</h5>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-green">
                  {card.price}
                </h4>
                <p className="text-gray">{card.info}</p>
              </div>
              <Accordion className="px-0 py-3" isCompact>
                <AccordionItem className="font-semibold " title="Learn more">
                  {card.features.map((item, i) => (
                    <div key={i} className="text-sm mb-3">
                      <h5 className="text-black dark:text-white font-medium">
                        {item.title}
                      </h5>
                      <p className="text-gray font-normal">{item.value}</p>
                    </div>
                  ))}
                </AccordionItem>
              </Accordion>
              <ButtonGradient
                radius="sm"
                size="md"
                value="Order a website"
                className=" w-full"
              />
            </motion.article>
          ))}
        </section>
      </div>
    </section>
  );
};
