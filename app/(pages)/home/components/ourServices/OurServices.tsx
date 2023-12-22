// React
import { FC } from "react";
// Styles
import s from "./styles/OurServices.module.scss";
// Animations
import { motion } from "framer-motion";
// Components
import { Tabs, Tab } from "@nextui-org/react";
// Icons
import { Check } from "lucide-react";
// Next
import Image from "next/image";

export const OurServices: FC = ({}) => {
  const DATA_TABS = [
    {
      title_tab: "Landing pages",
      image: "/OurServices/img.jpg",
      content: {
        title: "Landing Pages for Advertising Launch",
        info: "One-page sites created according to all the rules of effective landing pages.",
        features: [
          {
            value:
              "Are a perfect fit for launching paid advertising in social media and Google Ads.",
          },
          {
            value:
              "Convenient for quick testing of your hypotheses and analysis of consumer demand.",
          },
          {
            value:
              "Bright, simple, not overloaded with unnecessary information. The development takes about 10 days.",
          },
        ],
      },
    },
    {
      title_tab: "Multi-page sites",
      image: "/OurServices/Multi-site.jpg",
      content: {
        title: "Tell Potential Clients About Yourself",
        info: "Order a large, stylish website that will introduce your audience to your services and products.",
        features: [
          {
            value:
              "You can get more free organic traffic from search results with optimized content.",
          },
          {
            value:
              "Increase brand awareness and user loyalty with a large, stylish, and functional website.",
          },
          {
            value:
              "Great opportunity for you to tell in detail about each type of your goods and/or services.",
          },
        ],
      },
    },
    {
      title_tab: "Online stores",
      image: "/OurServices/StoreImg.jpg",
      content: {
        title: "Start selling goods and services online!",
        info: "Accept orders and payments through a stylish and functional online store.",
        features: [
          {
            value:
              "The number of products in the online store is not limited. We help with the initial setup and add your products.",
          },
          {
            value:
              "Product cards can be optimized for SEO for promotion in Google search results.",
          },
          {
            value:
              "With the simple interface, you will be able to easily add new products and make any changes yourself in the future.",
          },
        ],
      },
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
    <section className={`${s.OurServices} bg-white dark:bg-black `}>
      <div className="container">
        <section className={s.Wrapper}>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.Header}
          >
            <section className={s.Header}>
              <motion.h3 variants={animation} custom={1} className="text-green">
                What we develop
              </motion.h3>
              <motion.h2
                variants={animation}
                custom={2}
                className="text-black dark:text-white"
              >
                Our Services
              </motion.h2>
              <motion.p variants={animation} custom={3} className="text-gray">
                We develop websites of any complexity, from simple one-pagers to
                online stores. One thing remains unchanged: the quality of our
                work and the attention to detail.
              </motion.p>
            </section>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={animation}
            className={s.Content}
          >
            <Tabs
              classNames={{
                base: "mb-5 border-b-1 border-gray/20  grid justify-center ",
                cursor: "w-full bg-green",
                panel: ` ${s.Tab} bg-white shadow-lg p-10 rounded-lg dark:shadow-2xl dark:bg-black_secondary/40`,
                tab: "py-8 text-sm sm:text-base font-normal ",
                tabContent:
                  " text-gray group-data-[selected=true]:text-green dark:group-data-[selected=true]:text-white",
                tabList: "p-0  ",
              }}
              items={DATA_TABS}
              fullWidth
              size="lg"
              variant="underlined"
            >
              {DATA_TABS.map((tab, i) => (
                <Tab key={i} title={tab.title_tab}>
                  <figure className=" dark:shadow-md rounded-md">
                    <Image
                      src={tab.image}
                      alt="Image"
                      width={495}
                      height={320}
                    />
                  </figure>
                  <article>
                    <div>
                      <h3>{tab.content.title}</h3>
                      <p className="text-gray">{tab.content.info}</p>
                    </div>
                    <ul>
                      {tab.content.features.map((item, i) => (
                        <li className="text-black dark:text-white" key={i}>
                          <i className="text-blue dark:text-green">
                            <Check strokeWidth={2} size={18} />
                          </i>
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Tab>
              ))}
            </Tabs>
          </motion.section>
        </section>
      </div>
    </section>
  );
};
