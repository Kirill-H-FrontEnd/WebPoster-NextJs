// React
import { FC } from "react";
// Components
import { TitleBannerPage } from "@/app/components/TitleBannerPage/TitleBannerPage";
import { ContactForm } from "./components/Form/contact-form";

const Contacts: FC = ({}) => {
  return (
    <>
      <TitleBannerPage
        supTitle="Our Contacts"
        text="Fill out the form, and we will contact you shortly to help you choose the best pricing plan and discuss all the nuances."
        title="Do You Want to Order a New Website?"
      />
      <ContactForm />
    </>
  );
};

export default Contacts;
