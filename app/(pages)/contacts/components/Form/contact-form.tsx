"use client";
import { FC } from "react";
import s from "./contactForm.module.scss";
import { Input, Textarea } from "@nextui-org/react";
import { Building2, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import SubmitBtn from "@/app/components/UI/Button/SubmitBtn";

export const ContactForm: FC = ({}) => {
  const CONTACT_ITEMS = [
    {
      icon: <Building2 size={18} strokeWidth={1.5} />,
      label: "Office",
      value: "545 Mavis Island, Chicago, IL 99191",
    },
    {
      icon: <Phone size={18} strokeWidth={1.5} />,
      label: "Phone",
      value: "+1 (555) 234-5678",
    },
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: "Email",
      value: "hello@webposter.studio",
    },
    {
      icon: <Clock size={18} strokeWidth={1.5} />,
      label: "Working hours",
      value: "Mon – Fri, 9:00 – 18:00",
    },
  ];

  return (
    <section className={`${s.ContactForm} bg-white dark:bg-black`}>
      <div className="container">
        <div className={s.Grid}>
          {/* Left: Info */}
          <div className={s.Info}>
            <div className={s.InfoCard}>
              <div className={s.InfoOrb} />
              <div className={s.InfoTop}>
                <span className={s.InfoTag}>Contact us</span>
                <h2 className="text-black dark:text-white">
                  Let's build something <em>great</em> together
                </h2>
                <p className="text-gray">
                  Tell us about your project — we'll get back to you within one
                  business day to discuss the details and find the best solution
                  for your business.
                </p>
              </div>

              <ul className={s.ContactList}>
                {CONTACT_ITEMS.map((item, i) => (
                  <li key={i} className={s.ContactItem}>
                    <span className={s.ContactIcon}>{item.icon}</span>
                    <div className={s.ContactText}>
                      <span className={s.ContactLabel}>{item.label}</span>
                      <span
                        className={`${s.ContactValue} text-black dark:text-white`}
                      >
                        {item.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className={s.InfoFooter}>
                <span className="text-gray">We usually reply within</span>
                <span className={s.ReplyBadge}>
                  <ArrowRight size={12} />1 business day
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={s.FormWrap}>
            <div className={s.FormCard}>
              <div className={s.FormHeader}>
                <h3 className="text-black dark:text-white">Send a message</h3>
                <p className="text-gray">
                  Fill out the form and we'll be in touch shortly.
                </p>
              </div>
              <form action="" className={s.Form}>
                <div className={s.NameRow}>
                  <div className={s.Field}>
                    <label className={s.Label}>First name</label>
                    <Input
                      variant="bordered"
                      placeholder="John"
                      classNames={{
                        inputWrapper:
                          "dark:border-zinc-700 dark:bg-zinc-900/50",
                      }}
                    />
                  </div>
                  <div className={s.Field}>
                    <label className={s.Label}>Last name</label>
                    <Input
                      variant="bordered"
                      placeholder="Doe"
                      classNames={{
                        inputWrapper:
                          "dark:border-zinc-700 dark:bg-zinc-900/50",
                      }}
                    />
                  </div>
                </div>
                <div className={s.Field}>
                  <label className={s.Label}>Email</label>
                  <Input
                    variant="bordered"
                    placeholder="john@example.com"
                    type="email"
                    classNames={{
                      inputWrapper: "dark:border-zinc-700 dark:bg-zinc-900/50",
                    }}
                  />
                </div>
                <div className={s.Field}>
                  <label className={s.Label}>Phone number</label>
                  <Input
                    variant="bordered"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    classNames={{
                      inputWrapper: "dark:border-zinc-700 dark:bg-zinc-900/50",
                    }}
                  />
                </div>
                <div className={s.Field}>
                  <label className={s.Label}>Message</label>
                  <Textarea
                    disableAutosize
                    variant="bordered"
                    placeholder="Tell us about your project, goals, and any details that matter to you..."
                    classNames={{
                      input: "resize-y min-h-[120px]",
                      inputWrapper: "dark:border-zinc-700 dark:bg-zinc-900/50",
                    }}
                  />
                </div>
                <SubmitBtn
                  radius="md"
                  size="lg"
                  value="Send message"
                  styles="bg-gradient-to-br from-blue to-green text-white font-medium shadow"
                />
                <p className={s.Privacy}>
                  By submitting this form you agree to our{" "}
                  <a href="/" className="text-blue dark:text-green underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
