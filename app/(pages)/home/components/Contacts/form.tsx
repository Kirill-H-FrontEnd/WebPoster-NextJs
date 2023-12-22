// React
import { FC } from "react";
// Animations
import { motion } from "framer-motion";
// Components
import SubmitBtn from "@/app/components/UI/Button/SubmitBtn";
import { MyInput } from "@/app/components/UI/Input/Input";

export const ContactForm: FC = ({}) => {
  const animation = {
    hidden: {
      x: 30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };
  return (
    <>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={animation}
        action=""
        className="bg-gray/5 dark:bg-black_secondary/40"
      >
        <h4 className="text-black dark:text-white">Leave your contacts!</h4>
        <MyInput
          variant="bordered"
          size="sm"
          name="name"
          label="Name"
          type="text"
        />
        <MyInput
          variant="bordered"
          size="sm"
          name="email"
          label="Email"
          type="email"
        />
        <SubmitBtn
          radius="full"
          size="md"
          value="Order A Website"
          styles="bg-gradient-to-br from-blue to-green text-white"
        />
      </motion.form>
    </>
  );
};
