"use client";
import { FC } from "react";
import s from "./contactForm.module.scss";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Building2, Phone, Mail } from "lucide-react";
import { ButtonGradient } from "@/app/components/UI/Button/ButtonGradient";
import SubmitBtn from "@/app/components/UI/Button/SubmitBtn";
type TContactForm = {};

export const ContactForm: FC = ({}) => {
  return (
    <section className={s.contactForm}>
      <div className="container">
        <section className={s.contactForm__content}>
          <section className={s.contactForm__info}>
            <div className="max-w-[500px] ">
              <h4 className="text-[60px] font-semibold text-black ">
                Get in touch
              </h4>
              <p className="text-gray leading-[28px]">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
            </div>
            <div className="text-gray mt-4">
              <div>
                <Building2 /> <p>545 Mavis Island Chicago, IL 99191</p>
              </div>
              <div>
                <Phone />
                <p> +1 (555) 234-5678</p>
              </div>
              <div>
                <Mail />
                <p> hello@example.com</p>
              </div>
            </div>
          </section>
          <form action={""} className={s.contactForm__form}>
            <div className={s.contactForm__name}>
              <Input variant="bordered" placeholder="First name" />
              <Input variant="bordered" placeholder="Last name" />
            </div>
            <div className={s.mail}>
              <Input variant="bordered" placeholder="Email" />
            </div>
            <div className={s.number}>
              <Input variant="bordered" placeholder="Phone number" />
            </div>
            <div className={s.number}>
              <Textarea
                disableAutosize
                classNames={{
                  base: "",
                  input: "resize-y min-h-[100px]",
                }}
                placeholder="Enter your description"
                variant="bordered"
              />
            </div>
            <SubmitBtn radius="md" size="lg" value="Send" />
          </form>
        </section>
      </div>
    </section>
  );
};
